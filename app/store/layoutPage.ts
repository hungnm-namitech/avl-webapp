import { create } from 'zustand';

type StateType = {
  breadcrumbs: { href: string; text: string }[];
  isOpenMenu: boolean;
};

type ActionType = {
  saveBreadcrumbs: (breadcrumbs: StateType['breadcrumbs']) => void;
  saveIsOpenMenu: (isOpenMenu: StateType['isOpenMenu']) => void;
};

export const useLayoutPage = create<StateType & ActionType>((set) => ({
  breadcrumbs: [
    {
      href: '#',
      text: '',
    },
  ],
  isOpenMenu: true,

  saveBreadcrumbs: (breadcrumbs: StateType['breadcrumbs']) =>
    set({ breadcrumbs }),
  saveIsOpenMenu: (isOpenMenu: StateType['isOpenMenu']) => set({ isOpenMenu }),
}));
