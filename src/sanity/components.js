import { definePlugin } from 'sanity';
import TableInput from '../components/studio/TableInput';

// Define and export all custom Sanity components
export const customComponents = definePlugin({
  name: 'custom-components',
  components: {
    input: {
      table: TableInput,
    },
  },
}); 