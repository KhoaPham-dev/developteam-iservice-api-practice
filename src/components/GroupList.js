import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Table,
  Select,
  Space,
  Alert,
  Popconfirm,
  Button,
  Skeleton,
} from "antd";

import EditModal from "./EditModal";
import {
  getGroupsRequest,
  editGroupRequest,
  handleGroupsError,
  removeGroupRequest,
} from "../actions/groups";

import "./GroupList.css";

export default connect(({ auth, groups }) => ({ auth, groups }))((props) => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [isConfirmShowed, setIsConfirmShowed] = useState(false);

  useEffect(() => {
    props.dispatch(getGroupsRequest({ token: props.auth.isAuthUser }));
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Group Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Permissions",
      key: "permissions",
      dataIndex: "permissions",
      render: (permissions) => {
        if (permissions)
          return (
            <Select value={permissions[0].name.toUpperCase()}>
              {permissions.map((permission) => {
                return (
                  <Select.Option key={permission.id}>
                    {permission.name.toUpperCase()}
                  </Select.Option>
                );
              })}
            </Select>
          );
        else return <div></div>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={(e) => {
              handleVisibleModal(record);
            }}
          >
            Edit
          </a>
          <Popconfirm
            title="Are you sure?"
            visible={isConfirmShowed.id === record.id ? true : false}
            onConfirm={handleDelete}
            okButtonProps={{ loading: props.groups.isLoading }}
            onCancel={() => {
              setIsConfirmShowed(false);
            }}
          >
            <a
              onClick={(e) => {
                handleVisibleConfirm(record);
              }}
            >
              Delete
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    props.dispatch(
      getGroupsRequest({
        token: props.auth.isAuthUser,
        page: pagination.current,
        pageSize: pagination.pageSize,
      })
    );
    setPagination({ current: pagination.current, pageSize: 5 });
  };

  const handleVisibleModal = (record) => {
    setIsModalShowed(record);
  };
  const handleSubmitEditing = (values) => {
    let { description, id, name, permissions } = values;
    props.dispatch(
      editGroupRequest({
        token: props.auth.isAuthUser,
        page: pagination.current,
        pageSize: pagination.pageSize,
        description,
        id,
        name,
        permissions,
      })
    );
  };
  const handleVisibleConfirm = (record) => {
    setIsConfirmShowed(record);
  };
  const handleDelete = () => {
    props.dispatch(
      removeGroupRequest({
        token: props.auth.isAuthUser,
        id: isConfirmShowed.id,
        page: pagination.current,
        pageSize: pagination.pageSize,
      })
    );
    setTimeout(() => {
      setIsConfirmShowed(false);
    }, 1000);
  };
  if (props.groups.items.length > 0) {
    let groups = props.groups.items;

    return (
      <div
        style={{
          width: "70%",
          minWidth: "700px",
          margin: "0 auto",
        }}
      >
        {props.groups.error ? (
          <Alert
            className="alert"
            message={
              props.groups.error === "success_edited" ? "Edited" : "Error"
            }
            description={`${props.groups.error}`}
            type={props.groups.error === "success_edited" ? "success" : "error"}
            showIcon
            closable
            onClose={() => {
              props.dispatch(handleGroupsError(""));
            }}
          />
        ) : null}

        <Table
          style={{
            minWidth: "700px",
            margin: "0 auto",
            padding: "8px",
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
          }}
          size="small"
          tableLayout="fixed"
          columns={columns}
          dataSource={groups}
          rowKey={(record) => {
            return record.id;
          }}
          pagination={pagination}
          loading={props.groups.isLoading}
          onChange={handleTableChange}
        />
        {isModalShowed ? (
          <EditModal
            handleVisibleModal={handleVisibleModal}
            record={isModalShowed}
            isLoading={props.groups.isLoading}
            handleSubmitEditing={handleSubmitEditing}
          />
        ) : null}
      </div>
    );
  }
  return (
    <div
      style={{
        width: "70%",
        minWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Skeleton
        paragraph={{ rows: 6 }}
        active
        loading={props.groups.items.length > 0 ? false : true}
      />
    </div>
  );
});
