import React from 'react';
import { connect } from 'dva';
import List from './List';
import { Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const Products = ({ dispatch, products, loading }) => {

  const list = {
    products: products.list,
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

export default connect(({ products, loading }) => ({
  products,
  loading: loading.models.products,
}))(Products);