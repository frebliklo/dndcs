import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Character } from '../generated/prisma-client'
import IApolloContext from '../interfaces/apolloContext'
import { CreateCharacterInput } from '../types/CharacterInputs'
import CharacterType from '../types/CharacterType'
import getModifier from '../utils/getModifier'
import getProfBonusFromLevel from '../utils/getProfBonusFromLevel'

@Resolver()
class CharacterResolver {
  @Authorized()
  @Query(() => CharacterType, {
    description:
      'Find a character belonging to the currently authenticated user',
  })
  async character(
    @Arg('id') id: string,
    @Ctx() { prisma, userId }: IApolloContext
  ): Promise<Character> {
    try {
      const [character] = await prisma.characters({
        where: { AND: [{ owner: { id: userId } }, { id }] },
      })

      return character
    } catch (err) {
      return null
    }
  }

  @Authorized()
  @Mutation(() => CharacterType, {
    description: 'Create a character for the currently authenticated user',
  })
  async createCharacter(
    @Arg('data') data: CreateCharacterInput,
    @Ctx() { prisma, userId }: IApolloContext
  ): Promise<Character> {
    const proficiencyBonus = getProfBonusFromLevel(data.level)

    const character = await prisma.createCharacter({
      ...data,
      proficiencyBonus,
      owner: { connect: { id: userId } },
    })

    return character
  }

  @Authorized()
  @Mutation(() => CharacterType, {
    description:
      'Delete a character by id owned by the currently authenticated user',
  })
  async deleteCharacter(
    @Arg('id') id: string,
    @Ctx() { prisma, userId }: IApolloContext
  ): Promise<Character> {
    const [characterToDelete] = await prisma.characters({
      where: { AND: [{ id }, { owner: { id: userId } }] },
    })

    if (!characterToDelete) {
      throw new Error('User not found')
    }

    const deletedCharacter = await prisma.deleteCharacter({
      id: characterToDelete.id,
    })

    return deletedCharacter
  }
}

export default CharacterResolver
