// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateAuthToken {
  count: Int!
}

type AggregateCharacter {
  count: Int!
}

type AggregateFeature {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AuthToken {
  id: ID!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AuthTokenConnection {
  pageInfo: PageInfo!
  edges: [AuthTokenEdge]!
  aggregate: AggregateAuthToken!
}

input AuthTokenCreateInput {
  id: ID
  token: String!
}

input AuthTokenCreateManyInput {
  create: [AuthTokenCreateInput!]
  connect: [AuthTokenWhereUniqueInput!]
}

type AuthTokenEdge {
  node: AuthToken!
  cursor: String!
}

enum AuthTokenOrderByInput {
  id_ASC
  id_DESC
  token_ASC
  token_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthTokenPreviousValues {
  id: ID!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AuthTokenScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AuthTokenScalarWhereInput!]
  OR: [AuthTokenScalarWhereInput!]
  NOT: [AuthTokenScalarWhereInput!]
}

type AuthTokenSubscriptionPayload {
  mutation: MutationType!
  node: AuthToken
  updatedFields: [String!]
  previousValues: AuthTokenPreviousValues
}

input AuthTokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthTokenWhereInput
  AND: [AuthTokenSubscriptionWhereInput!]
  OR: [AuthTokenSubscriptionWhereInput!]
  NOT: [AuthTokenSubscriptionWhereInput!]
}

input AuthTokenUpdateDataInput {
  token: String
}

input AuthTokenUpdateInput {
  token: String
}

input AuthTokenUpdateManyDataInput {
  token: String
}

input AuthTokenUpdateManyInput {
  create: [AuthTokenCreateInput!]
  update: [AuthTokenUpdateWithWhereUniqueNestedInput!]
  upsert: [AuthTokenUpsertWithWhereUniqueNestedInput!]
  delete: [AuthTokenWhereUniqueInput!]
  connect: [AuthTokenWhereUniqueInput!]
  set: [AuthTokenWhereUniqueInput!]
  disconnect: [AuthTokenWhereUniqueInput!]
  deleteMany: [AuthTokenScalarWhereInput!]
  updateMany: [AuthTokenUpdateManyWithWhereNestedInput!]
}

input AuthTokenUpdateManyMutationInput {
  token: String
}

input AuthTokenUpdateManyWithWhereNestedInput {
  where: AuthTokenScalarWhereInput!
  data: AuthTokenUpdateManyDataInput!
}

input AuthTokenUpdateWithWhereUniqueNestedInput {
  where: AuthTokenWhereUniqueInput!
  data: AuthTokenUpdateDataInput!
}

input AuthTokenUpsertWithWhereUniqueNestedInput {
  where: AuthTokenWhereUniqueInput!
  update: AuthTokenUpdateDataInput!
  create: AuthTokenCreateInput!
}

input AuthTokenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AuthTokenWhereInput!]
  OR: [AuthTokenWhereInput!]
  NOT: [AuthTokenWhereInput!]
}

input AuthTokenWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Character {
  id: ID!
  public: Boolean!
  name: String!
  bio: String
  level: Int!
  hitDie: Int!
  maxHp: Int!
  currentHp: Int!
  dndClass: ClassEnum!
  dndSubclass: SubclassEnum
  dndRace: RaceEnum!
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int!
  strength: Int!
  dexterity: Int!
  constitution: Int!
  intelligence: Int!
  wisdom: Int!
  charisma: Int!
  proficiencyBonus: Int!
  features(where: FeatureWhereInput, orderBy: FeatureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feature!]
  owner: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CharacterConnection {
  pageInfo: PageInfo!
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  id: ID
  public: Boolean
  name: String!
  bio: String
  level: Int
  hitDie: Int!
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum!
  dndSubclass: SubclassEnum
  dndRace: RaceEnum!
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  features: FeatureCreateManyWithoutCharactersInput
  owner: UserCreateOneWithoutCharactersInput!
}

input CharacterCreateManyWithoutFeaturesInput {
  create: [CharacterCreateWithoutFeaturesInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateManyWithoutOwnerInput {
  create: [CharacterCreateWithoutOwnerInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateWithoutFeaturesInput {
  id: ID
  public: Boolean
  name: String!
  bio: String
  level: Int
  hitDie: Int!
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum!
  dndSubclass: SubclassEnum
  dndRace: RaceEnum!
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  owner: UserCreateOneWithoutCharactersInput!
}

input CharacterCreateWithoutOwnerInput {
  id: ID
  public: Boolean
  name: String!
  bio: String
  level: Int
  hitDie: Int!
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum!
  dndSubclass: SubclassEnum
  dndRace: RaceEnum!
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  features: FeatureCreateManyWithoutCharactersInput
}

type CharacterEdge {
  node: Character!
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  public_ASC
  public_DESC
  name_ASC
  name_DESC
  bio_ASC
  bio_DESC
  level_ASC
  level_DESC
  hitDie_ASC
  hitDie_DESC
  maxHp_ASC
  maxHp_DESC
  currentHp_ASC
  currentHp_DESC
  dndClass_ASC
  dndClass_DESC
  dndSubclass_ASC
  dndSubclass_DESC
  dndRace_ASC
  dndRace_DESC
  dndSubrace_ASC
  dndSubrace_DESC
  abilityScoreBonus_ASC
  abilityScoreBonus_DESC
  strength_ASC
  strength_DESC
  dexterity_ASC
  dexterity_DESC
  constitution_ASC
  constitution_DESC
  intelligence_ASC
  intelligence_DESC
  wisdom_ASC
  wisdom_DESC
  charisma_ASC
  charisma_DESC
  proficiencyBonus_ASC
  proficiencyBonus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CharacterPreviousValues {
  id: ID!
  public: Boolean!
  name: String!
  bio: String
  level: Int!
  hitDie: Int!
  maxHp: Int!
  currentHp: Int!
  dndClass: ClassEnum!
  dndSubclass: SubclassEnum
  dndRace: RaceEnum!
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int!
  strength: Int!
  dexterity: Int!
  constitution: Int!
  intelligence: Int!
  wisdom: Int!
  charisma: Int!
  proficiencyBonus: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CharacterScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  public: Boolean
  public_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  hitDie: Int
  hitDie_not: Int
  hitDie_in: [Int!]
  hitDie_not_in: [Int!]
  hitDie_lt: Int
  hitDie_lte: Int
  hitDie_gt: Int
  hitDie_gte: Int
  maxHp: Int
  maxHp_not: Int
  maxHp_in: [Int!]
  maxHp_not_in: [Int!]
  maxHp_lt: Int
  maxHp_lte: Int
  maxHp_gt: Int
  maxHp_gte: Int
  currentHp: Int
  currentHp_not: Int
  currentHp_in: [Int!]
  currentHp_not_in: [Int!]
  currentHp_lt: Int
  currentHp_lte: Int
  currentHp_gt: Int
  currentHp_gte: Int
  dndClass: ClassEnum
  dndClass_not: ClassEnum
  dndClass_in: [ClassEnum!]
  dndClass_not_in: [ClassEnum!]
  dndSubclass: SubclassEnum
  dndSubclass_not: SubclassEnum
  dndSubclass_in: [SubclassEnum!]
  dndSubclass_not_in: [SubclassEnum!]
  dndRace: RaceEnum
  dndRace_not: RaceEnum
  dndRace_in: [RaceEnum!]
  dndRace_not_in: [RaceEnum!]
  dndSubrace: SubraceEnum
  dndSubrace_not: SubraceEnum
  dndSubrace_in: [SubraceEnum!]
  dndSubrace_not_in: [SubraceEnum!]
  abilityScoreBonus: Int
  abilityScoreBonus_not: Int
  abilityScoreBonus_in: [Int!]
  abilityScoreBonus_not_in: [Int!]
  abilityScoreBonus_lt: Int
  abilityScoreBonus_lte: Int
  abilityScoreBonus_gt: Int
  abilityScoreBonus_gte: Int
  strength: Int
  strength_not: Int
  strength_in: [Int!]
  strength_not_in: [Int!]
  strength_lt: Int
  strength_lte: Int
  strength_gt: Int
  strength_gte: Int
  dexterity: Int
  dexterity_not: Int
  dexterity_in: [Int!]
  dexterity_not_in: [Int!]
  dexterity_lt: Int
  dexterity_lte: Int
  dexterity_gt: Int
  dexterity_gte: Int
  constitution: Int
  constitution_not: Int
  constitution_in: [Int!]
  constitution_not_in: [Int!]
  constitution_lt: Int
  constitution_lte: Int
  constitution_gt: Int
  constitution_gte: Int
  intelligence: Int
  intelligence_not: Int
  intelligence_in: [Int!]
  intelligence_not_in: [Int!]
  intelligence_lt: Int
  intelligence_lte: Int
  intelligence_gt: Int
  intelligence_gte: Int
  wisdom: Int
  wisdom_not: Int
  wisdom_in: [Int!]
  wisdom_not_in: [Int!]
  wisdom_lt: Int
  wisdom_lte: Int
  wisdom_gt: Int
  wisdom_gte: Int
  charisma: Int
  charisma_not: Int
  charisma_in: [Int!]
  charisma_not_in: [Int!]
  charisma_lt: Int
  charisma_lte: Int
  charisma_gt: Int
  charisma_gte: Int
  proficiencyBonus: Int
  proficiencyBonus_not: Int
  proficiencyBonus_in: [Int!]
  proficiencyBonus_not_in: [Int!]
  proficiencyBonus_lt: Int
  proficiencyBonus_lte: Int
  proficiencyBonus_gt: Int
  proficiencyBonus_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CharacterScalarWhereInput!]
  OR: [CharacterScalarWhereInput!]
  NOT: [CharacterScalarWhereInput!]
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
  AND: [CharacterSubscriptionWhereInput!]
  OR: [CharacterSubscriptionWhereInput!]
  NOT: [CharacterSubscriptionWhereInput!]
}

input CharacterUpdateInput {
  public: Boolean
  name: String
  bio: String
  level: Int
  hitDie: Int
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum
  dndSubclass: SubclassEnum
  dndRace: RaceEnum
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  features: FeatureUpdateManyWithoutCharactersInput
  owner: UserUpdateOneRequiredWithoutCharactersInput
}

input CharacterUpdateManyDataInput {
  public: Boolean
  name: String
  bio: String
  level: Int
  hitDie: Int
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum
  dndSubclass: SubclassEnum
  dndRace: RaceEnum
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
}

input CharacterUpdateManyMutationInput {
  public: Boolean
  name: String
  bio: String
  level: Int
  hitDie: Int
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum
  dndSubclass: SubclassEnum
  dndRace: RaceEnum
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
}

input CharacterUpdateManyWithoutFeaturesInput {
  create: [CharacterCreateWithoutFeaturesInput!]
  delete: [CharacterWhereUniqueInput!]
  connect: [CharacterWhereUniqueInput!]
  set: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutFeaturesInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutFeaturesInput!]
  deleteMany: [CharacterScalarWhereInput!]
  updateMany: [CharacterUpdateManyWithWhereNestedInput!]
}

input CharacterUpdateManyWithoutOwnerInput {
  create: [CharacterCreateWithoutOwnerInput!]
  delete: [CharacterWhereUniqueInput!]
  connect: [CharacterWhereUniqueInput!]
  set: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [CharacterScalarWhereInput!]
  updateMany: [CharacterUpdateManyWithWhereNestedInput!]
}

input CharacterUpdateManyWithWhereNestedInput {
  where: CharacterScalarWhereInput!
  data: CharacterUpdateManyDataInput!
}

input CharacterUpdateWithoutFeaturesDataInput {
  public: Boolean
  name: String
  bio: String
  level: Int
  hitDie: Int
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum
  dndSubclass: SubclassEnum
  dndRace: RaceEnum
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  owner: UserUpdateOneRequiredWithoutCharactersInput
}

input CharacterUpdateWithoutOwnerDataInput {
  public: Boolean
  name: String
  bio: String
  level: Int
  hitDie: Int
  maxHp: Int
  currentHp: Int
  dndClass: ClassEnum
  dndSubclass: SubclassEnum
  dndRace: RaceEnum
  dndSubrace: SubraceEnum
  abilityScoreBonus: Int
  strength: Int
  dexterity: Int
  constitution: Int
  intelligence: Int
  wisdom: Int
  charisma: Int
  proficiencyBonus: Int
  features: FeatureUpdateManyWithoutCharactersInput
}

input CharacterUpdateWithWhereUniqueWithoutFeaturesInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutFeaturesDataInput!
}

input CharacterUpdateWithWhereUniqueWithoutOwnerInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutOwnerDataInput!
}

input CharacterUpsertWithWhereUniqueWithoutFeaturesInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutFeaturesDataInput!
  create: CharacterCreateWithoutFeaturesInput!
}

input CharacterUpsertWithWhereUniqueWithoutOwnerInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutOwnerDataInput!
  create: CharacterCreateWithoutOwnerInput!
}

input CharacterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  public: Boolean
  public_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  hitDie: Int
  hitDie_not: Int
  hitDie_in: [Int!]
  hitDie_not_in: [Int!]
  hitDie_lt: Int
  hitDie_lte: Int
  hitDie_gt: Int
  hitDie_gte: Int
  maxHp: Int
  maxHp_not: Int
  maxHp_in: [Int!]
  maxHp_not_in: [Int!]
  maxHp_lt: Int
  maxHp_lte: Int
  maxHp_gt: Int
  maxHp_gte: Int
  currentHp: Int
  currentHp_not: Int
  currentHp_in: [Int!]
  currentHp_not_in: [Int!]
  currentHp_lt: Int
  currentHp_lte: Int
  currentHp_gt: Int
  currentHp_gte: Int
  dndClass: ClassEnum
  dndClass_not: ClassEnum
  dndClass_in: [ClassEnum!]
  dndClass_not_in: [ClassEnum!]
  dndSubclass: SubclassEnum
  dndSubclass_not: SubclassEnum
  dndSubclass_in: [SubclassEnum!]
  dndSubclass_not_in: [SubclassEnum!]
  dndRace: RaceEnum
  dndRace_not: RaceEnum
  dndRace_in: [RaceEnum!]
  dndRace_not_in: [RaceEnum!]
  dndSubrace: SubraceEnum
  dndSubrace_not: SubraceEnum
  dndSubrace_in: [SubraceEnum!]
  dndSubrace_not_in: [SubraceEnum!]
  abilityScoreBonus: Int
  abilityScoreBonus_not: Int
  abilityScoreBonus_in: [Int!]
  abilityScoreBonus_not_in: [Int!]
  abilityScoreBonus_lt: Int
  abilityScoreBonus_lte: Int
  abilityScoreBonus_gt: Int
  abilityScoreBonus_gte: Int
  strength: Int
  strength_not: Int
  strength_in: [Int!]
  strength_not_in: [Int!]
  strength_lt: Int
  strength_lte: Int
  strength_gt: Int
  strength_gte: Int
  dexterity: Int
  dexterity_not: Int
  dexterity_in: [Int!]
  dexterity_not_in: [Int!]
  dexterity_lt: Int
  dexterity_lte: Int
  dexterity_gt: Int
  dexterity_gte: Int
  constitution: Int
  constitution_not: Int
  constitution_in: [Int!]
  constitution_not_in: [Int!]
  constitution_lt: Int
  constitution_lte: Int
  constitution_gt: Int
  constitution_gte: Int
  intelligence: Int
  intelligence_not: Int
  intelligence_in: [Int!]
  intelligence_not_in: [Int!]
  intelligence_lt: Int
  intelligence_lte: Int
  intelligence_gt: Int
  intelligence_gte: Int
  wisdom: Int
  wisdom_not: Int
  wisdom_in: [Int!]
  wisdom_not_in: [Int!]
  wisdom_lt: Int
  wisdom_lte: Int
  wisdom_gt: Int
  wisdom_gte: Int
  charisma: Int
  charisma_not: Int
  charisma_in: [Int!]
  charisma_not_in: [Int!]
  charisma_lt: Int
  charisma_lte: Int
  charisma_gt: Int
  charisma_gte: Int
  proficiencyBonus: Int
  proficiencyBonus_not: Int
  proficiencyBonus_in: [Int!]
  proficiencyBonus_not_in: [Int!]
  proficiencyBonus_lt: Int
  proficiencyBonus_lte: Int
  proficiencyBonus_gt: Int
  proficiencyBonus_gte: Int
  features_every: FeatureWhereInput
  features_some: FeatureWhereInput
  features_none: FeatureWhereInput
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CharacterWhereInput!]
  OR: [CharacterWhereInput!]
  NOT: [CharacterWhereInput!]
}

input CharacterWhereUniqueInput {
  id: ID
}

enum ClassEnum {
  BARBARIAN
  BARD
  CLERIC
  DRUID
  FIGHTER
  MONK
  PALADIN
  RANGER
  ROGUE
  SORCERER
  WARLOCK
  WIZARD
}

scalar DateTime

type Feature {
  id: ID!
  index: Int!
  name: String!
  description: [String!]!
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
}

type FeatureConnection {
  pageInfo: PageInfo!
  edges: [FeatureEdge]!
  aggregate: AggregateFeature!
}

input FeatureCreatedescriptionInput {
  set: [String!]
}

input FeatureCreateInput {
  id: ID
  index: Int!
  name: String!
  description: FeatureCreatedescriptionInput
  characters: CharacterCreateManyWithoutFeaturesInput
}

input FeatureCreateManyWithoutCharactersInput {
  create: [FeatureCreateWithoutCharactersInput!]
  connect: [FeatureWhereUniqueInput!]
}

input FeatureCreateWithoutCharactersInput {
  id: ID
  index: Int!
  name: String!
  description: FeatureCreatedescriptionInput
}

type FeatureEdge {
  node: Feature!
  cursor: String!
}

enum FeatureOrderByInput {
  id_ASC
  id_DESC
  index_ASC
  index_DESC
  name_ASC
  name_DESC
}

type FeaturePreviousValues {
  id: ID!
  index: Int!
  name: String!
  description: [String!]!
}

input FeatureScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [FeatureScalarWhereInput!]
  OR: [FeatureScalarWhereInput!]
  NOT: [FeatureScalarWhereInput!]
}

type FeatureSubscriptionPayload {
  mutation: MutationType!
  node: Feature
  updatedFields: [String!]
  previousValues: FeaturePreviousValues
}

input FeatureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FeatureWhereInput
  AND: [FeatureSubscriptionWhereInput!]
  OR: [FeatureSubscriptionWhereInput!]
  NOT: [FeatureSubscriptionWhereInput!]
}

input FeatureUpdatedescriptionInput {
  set: [String!]
}

input FeatureUpdateInput {
  index: Int
  name: String
  description: FeatureUpdatedescriptionInput
  characters: CharacterUpdateManyWithoutFeaturesInput
}

input FeatureUpdateManyDataInput {
  index: Int
  name: String
  description: FeatureUpdatedescriptionInput
}

input FeatureUpdateManyMutationInput {
  index: Int
  name: String
  description: FeatureUpdatedescriptionInput
}

input FeatureUpdateManyWithoutCharactersInput {
  create: [FeatureCreateWithoutCharactersInput!]
  delete: [FeatureWhereUniqueInput!]
  connect: [FeatureWhereUniqueInput!]
  set: [FeatureWhereUniqueInput!]
  disconnect: [FeatureWhereUniqueInput!]
  update: [FeatureUpdateWithWhereUniqueWithoutCharactersInput!]
  upsert: [FeatureUpsertWithWhereUniqueWithoutCharactersInput!]
  deleteMany: [FeatureScalarWhereInput!]
  updateMany: [FeatureUpdateManyWithWhereNestedInput!]
}

input FeatureUpdateManyWithWhereNestedInput {
  where: FeatureScalarWhereInput!
  data: FeatureUpdateManyDataInput!
}

input FeatureUpdateWithoutCharactersDataInput {
  index: Int
  name: String
  description: FeatureUpdatedescriptionInput
}

input FeatureUpdateWithWhereUniqueWithoutCharactersInput {
  where: FeatureWhereUniqueInput!
  data: FeatureUpdateWithoutCharactersDataInput!
}

input FeatureUpsertWithWhereUniqueWithoutCharactersInput {
  where: FeatureWhereUniqueInput!
  update: FeatureUpdateWithoutCharactersDataInput!
  create: FeatureCreateWithoutCharactersInput!
}

input FeatureWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
  AND: [FeatureWhereInput!]
  OR: [FeatureWhereInput!]
  NOT: [FeatureWhereInput!]
}

input FeatureWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthToken(data: AuthTokenCreateInput!): AuthToken!
  updateAuthToken(data: AuthTokenUpdateInput!, where: AuthTokenWhereUniqueInput!): AuthToken
  updateManyAuthTokens(data: AuthTokenUpdateManyMutationInput!, where: AuthTokenWhereInput): BatchPayload!
  upsertAuthToken(where: AuthTokenWhereUniqueInput!, create: AuthTokenCreateInput!, update: AuthTokenUpdateInput!): AuthToken!
  deleteAuthToken(where: AuthTokenWhereUniqueInput!): AuthToken
  deleteManyAuthTokens(where: AuthTokenWhereInput): BatchPayload!
  createCharacter(data: CharacterCreateInput!): Character!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateManyCharacters(data: CharacterUpdateManyMutationInput!, where: CharacterWhereInput): BatchPayload!
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  createFeature(data: FeatureCreateInput!): Feature!
  updateFeature(data: FeatureUpdateInput!, where: FeatureWhereUniqueInput!): Feature
  updateManyFeatures(data: FeatureUpdateManyMutationInput!, where: FeatureWhereInput): BatchPayload!
  upsertFeature(where: FeatureWhereUniqueInput!, create: FeatureCreateInput!, update: FeatureUpdateInput!): Feature!
  deleteFeature(where: FeatureWhereUniqueInput!): Feature
  deleteManyFeatures(where: FeatureWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  authToken(where: AuthTokenWhereUniqueInput!): AuthToken
  authTokens(where: AuthTokenWhereInput, orderBy: AuthTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthToken]!
  authTokensConnection(where: AuthTokenWhereInput, orderBy: AuthTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthTokenConnection!
  character(where: CharacterWhereUniqueInput!): Character
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  feature(where: FeatureWhereUniqueInput!): Feature
  features(where: FeatureWhereInput, orderBy: FeatureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feature]!
  featuresConnection(where: FeatureWhereInput, orderBy: FeatureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeatureConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum RaceEnum {
  DWARF
  ELF
  HALFLING
  HUMAN
  DRAGONBORN
  GNOME
  HALF_ELF
  HALF_ORC
  TIEFLING
}

enum SubclassEnum {
  BERSERKER
  LORE
  LIFE
  LAND
  CHAMPION
  OPEN_HAND
  DEVOTION
  HUNTER
  THIEF
  ASSASIN
  ARCANE_TRICKSTER
  DRACONIC
  FIEND
  EVOCATION
}

enum SubraceEnum {
  HILL_DWARF
  HIGH_ELF
  LIGHTFOOT_HALFLING
  MOUNTAIN_DWARF
  WOOD_ELF
  DARK_ELF
}

type Subscription {
  authToken(where: AuthTokenSubscriptionWhereInput): AuthTokenSubscriptionPayload
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  feature(where: FeatureSubscriptionWhereInput): FeatureSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  emailVerified: Boolean!
  password: String
  tokens(where: AuthTokenWhereInput, orderBy: AuthTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthToken!]
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  emailVerified: Boolean
  password: String
  tokens: AuthTokenCreateManyInput
  characters: CharacterCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutCharactersInput {
  create: UserCreateWithoutCharactersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCharactersInput {
  id: ID
  name: String!
  email: String!
  emailVerified: Boolean
  password: String
  tokens: AuthTokenCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  emailVerified_ASC
  emailVerified_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  emailVerified: Boolean!
  password: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  emailVerified: Boolean
  password: String
  tokens: AuthTokenUpdateManyInput
  characters: CharacterUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  emailVerified: Boolean
  password: String
}

input UserUpdateOneRequiredWithoutCharactersInput {
  create: UserCreateWithoutCharactersInput
  update: UserUpdateWithoutCharactersDataInput
  upsert: UserUpsertWithoutCharactersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCharactersDataInput {
  name: String
  email: String
  emailVerified: Boolean
  password: String
  tokens: AuthTokenUpdateManyInput
}

input UserUpsertWithoutCharactersInput {
  update: UserUpdateWithoutCharactersDataInput!
  create: UserCreateWithoutCharactersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  emailVerified: Boolean
  emailVerified_not: Boolean
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  tokens_every: AuthTokenWhereInput
  tokens_some: AuthTokenWhereInput
  tokens_none: AuthTokenWhereInput
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`