import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
    const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

    // Sepette ürün olup olmadığını kontrol eden bir değişken
    const hasItemsInCart = all_products.some((e) => cartItems[e.id] > 0);

    return (
        <section className='max_padd_container pt-28'>
            {hasItemsInCart ? (
                <table className='w-full mx-auto'>
                    <thead>
                        <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-22'>
                            <th className='p-1 py-2'>Product</th>
                            <th className='p-1 py-2'>Title</th>
                            <th className='p-1 py-2'>Price</th>
                            <th className='p-1 py-2'>Quantity</th>
                            <th className='p-1 py-2'>Total</th>
                            <th className='p-1 py-2'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_products.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <tr key={e.id} className='border-b border-slate-900/20 py-6 medium-16 text-center'>
                                        <td className='flexCenter'><img src={e.image} alt="productImg" height={43} width={43} className='rounded-lg ring-1 ring-slate-900/5 my-1' /></td>
                                        <td><div className='line-clamp-3'>{e.name}</div></td>
                                        <td>${e.new_price}</td>
                                        <td className='w-16 h-16 bg-white'>{cartItems[e.id]}</td>
                                        <td>${e.new_price * cartItems[e.id]}</td>
                                        <td>
                                            <div className='bold-22 pl-14' onClick={() => removeFromCart(e.id)}><TbTrash /></div>
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            ) : (
                <div className='text-center text-slate-700 py-10 text-xl'>Sepet boş</div>
            )}
        </section>
    );
};

export default CartItems;
