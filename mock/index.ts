export default [
    {
      url: "/login",
      method: "post",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: {
            token: 'fakeToken'
          }
        };
      }
    },
    {
        url: "/getUserInfo",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "ok",
                data: {
                    // 姓名
                    name: '',
                    // 头像
                    avatar: '',
                    // 角色
                    roles: ['admin'],
                    // 权限
                    permissions: []
                }
            }
        }
    },
    {
      url: "/loginOut",
      method: "post",
      response: () => {
        return {
          code: 200,
          message: "ok"
        }
      }
    },
    {
      url: "/getRouters",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [
            {
              name: "System",
              path: "/system",
              hidden: false,
              redirect: "noRedirect",
              component: "Layout",
              alwaysShow: true,
              meta: { title: "系统管理", icon: "system", noCache: false },
              children: [
                {
                  name: "User",
                  path: "user",
                  hidden: false,
                  component: "system/user/index",
                  meta: { title: "用户管理", icon: "user", noCache: false },
                }
              ]
            }
          ]
        }
      }
    }
  ];
  