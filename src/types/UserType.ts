import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class UserType {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string
}

export default UserType
