import { create } from 'zustand';
  import { persist, devtools } from 'zustand/middleware'

  const userStore = (set) => ({
      user: {},
      setUser: (user) => {
          set((state) => ({
              user: user,
          }))
      },      
  })

  const useUserStore = create(
      devtools(
          persist(userStore, {
              name: "user",
          })
      )
  )

  export default useUserStore;
