import { Table } from '../../components';
import { getCellsWithMockedData } from '../../mocks/accountList';

export default {
  component: Table,
  tags: ['autodocs'],
  title: 'Table'
};

export const Default = {
  args: {
    cells: getCellsWithMockedData()
  }
};
