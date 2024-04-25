import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Input, Popover, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./postManagement.scss";
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
              <div className="list-content">
                <div className="text">
                  <div className="title"> UserId:</div>
                  {record.userId}
                </div>
                <div className="text">
                  <div className="title"> Id:</div>
                  {record.id}
                </div>
                <div className="text">
                  <div className="title">Title:</div> {record.title}
                </div>
                <div className="text">
                  <div className="title"> Body:</div>
                  {record.body}
                </div>
                <a onClick={hide}>Close</a>
              </div>
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
  async function onSearch(value) {
    setSreachValue(value);
    console.log("value", value);
    if (value !== "") {
      const newPacientes = await listPost?.filter((postFilter) =>
        postFilter.title?.toLowerCase()?.includes(value?.toLowerCase())
      );
      setFilterTitle(newPacientes);
    } else {
      setFilterTitle(listPost);
    }
  }

  return (
    <MainLayout>
      <div className="wrapper-post">
        Users Management
        <Input
          icon="search"
          placeholder="Search..."
          onInput={(e) => onSearch(e.target.value)}
        />
        <Table
          dataSource={searchValue?.length > 1 ? dataFilter : data}
          columns={columns}
          pagination={{
            total: searchValue?.length > 1 ? filterTile : listPost?.length,
            currentPage: page,
            //   pageSize: 5,
            onChange: (currentPage) => {
              setPage(currentPage);
            },
          }}
        />
      </div>
    </MainLayout>
  );
};

export default PostsManagement;
