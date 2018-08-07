import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import List from './List';
import { Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const Index = ({ products, loading, dispatch }) => {
  const list = {
    list: products.list,
    loading,
    onDelete(id) {
      dispatch({
        type: 'products/delete',
        payload: id,
      });
    }
  };
  return (
    <PageHeaderLayout title="豆瓣电影列表">
      <Card bordered={false}>
        <List {...list} />
      </Card>  
    </PageHeaderLayout>
  );
};

Index.propTypes = {
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(({ products, loading }) => ({
  products,
  loading: loading.models.products,
}))(Index);