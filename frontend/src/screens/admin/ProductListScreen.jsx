
import {Link } from 'react-router-dom';
import { Table, Button, Row, Col} from 'react-bootstrap';
import { FaEdit, FaTrash} from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation } from '../../slices/productsApiSlice';
import { toast } from 'react-toastify';

const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetProductsQuery({ pageNumber,});

  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        toast.success('Product deleted successfully');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }

  const createProductHandler = async () => {
    if(window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }


  return (
   <>
   <Row className='align-items-center'>
    <Col>
    <h1>Products</h1>
    </Col>
    <Col className='text-end'>
      <Button className='btn-sm m-3' onClick={createProductHandler}>
        <FaEdit /> Create Product
      </Button>
    </Col>
   </Row>


    {loadingCreate && <Loader />}
    {loadingDelete && <Loader />}
   {isLoading ? <Loader /> : error ? <Message variant='danger'>{error.data.message}</Message> : (
    <>
    <Table striped hover responsive className='table-sm'>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
          <th>BRAND</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {data.products.map((product) => (
          <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>
              <Link to={`/admin/product/${product._id}/edit`}>
                <Button variant='light' className='btn-sm' >
                  <FaEdit />
                </Button>
              </Link>
              {' '}
              <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                <FaTrash style={{ color: 'white' }} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    <Paginate page={data.page} pages={data.pages} isAdmin={true} />
    </>
    )}
   </>
  )
}

export default ProductListScreen