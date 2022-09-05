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
    }
  ];
  