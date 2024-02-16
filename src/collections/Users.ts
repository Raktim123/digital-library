import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: "Name",
      type: 'text',
      required: true
    },
    {
      name: "Phone",
      type: 'number',
      required: true,
      unique: true
    },
  ],
}

export default Users
