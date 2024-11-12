import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content } = Layout;

function AppLayout() {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem("access_token");

    const menuItems = isAuthenticated
        ? [
              { key: "/user", label: <Link to="/user">Profile</Link> },
              { key: "/posts", label: <Link to="/user">Posts</Link> },
              { key: "/comments", label: <Link to="/user">Comments</Link> },
          ]
        : [
              { key: "/login", label: <Link to="/login">Login</Link> },
              { key: "/register", label: <Link to="/register">Register</Link> },
          ];

    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} items={menuItems} />
            </Header>
            <Content style={{ padding: "0 50px", height: "100vh" }}>
                <div className="content" style={{ marginTop: "50px" }}>
                    <Outlet />
                </div>
            </Content>
        </Layout>
    );
}

export default AppLayout;
