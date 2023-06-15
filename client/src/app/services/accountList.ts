import { Account, AccountType } from '../../models';
import { api } from './api';
import { restApiRoutes } from './routes';

export const accountListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccountListWithTypeVerbose: builder.query<Account[], void>({
      async queryFn(_, __, ___, fetchWithBQ) {
        const accountsResult = await fetchWithBQ(restApiRoutes.accounts);
        if (accountsResult.error) return { error: accountsResult.error };
        const accounts = accountsResult.data as Account[];

        const accountTypesResult = await fetchWithBQ(restApiRoutes.accountTypes);
        if (accountTypesResult.error) return { error: accountTypesResult.error };
        const accountTypes = accountTypesResult.data as AccountType[];

        return {
          data: accounts.map((account) => ({
            ...account,
            accountType: accountTypes.find(({ id }) => id === account.accountType)?.title ?? ''
          }))
        };
      }
    })
  })
});

export const { useGetAccountListWithTypeVerboseQuery } = accountListApi;
