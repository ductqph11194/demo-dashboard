import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Input, Popover, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
const PostsManagement = () => {
  const [page, setPage] = useState();

  const [listPost, setListPost] = useState([]);
  const [searchValue, setSreachValue] = useState();
  const [filterTile, setFilterTitle] = useState([]);
  const [open, setOpen] = useState();
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setListPost(json);
        setFilterTitle(json);
      })
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="small">
          <Popover
            content={
              <>
                <div> UserId:{record.userId}</div>
                <div> Id:{record.id}</div>
                <div> Title:{record.title}</div>
                <div> Body:{record.body}</div>
                <a onClick={hide}>Close</a>
              </>
            }
            title="Content"
            trigger="click"
            open={open === record.id}
            onOpenChange={() => handleOpenChange(record.id)}
          >
            <Button icon={<EyeOutlined />} type="primary" ghost></Button>
          </Popover>
        </Space>
      ),
    },
  ];
  const data = listPost?.map((item, index) => ({
    key: index,
    id: item?.id,
    userId: item?.userId,
    title: item?.title,
    body: item?.body,
  }));
  const dataFilter = filterTile?.map((item, index) => ({
    key: index,
    id: item?.id,
    userId: item?.userId,
    title: item?.title,
    body: item?.body,
  }));
  const onSearch = (value) => {
    setSreachValue(value);
    if (searchValue !== "") {
      const newPacientes = listPost?.filter((value) =>
        value.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
      );
      setFilterTitle(newPacientes);
    } else {
      setFilterTitle(listPost);
    }
  };

  const { Search } = Input;
  return (
    <MainLayout>
      Users Management
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <Table
        dataSource={searchValue?.length > 1 ? dataFilter : data}
        columns={columns}
        pagination={{
          total: listPost?.length,
          currentPage: page,
          //   pageSize: 5,
          onChange: (currentPage) => {
            setPage(currentPage);
          },
        }}
      />
    </MainLayout>
  );
};

export default PostsManagement;