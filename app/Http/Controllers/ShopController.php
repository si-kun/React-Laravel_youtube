<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $shops = Shop::with('reviews')->get();

        // dd($shops);//デバッグ

        // 新着のレビューを5件取得
        $newReviews = Review::with('shop','user')
        ->orderBy('created_at', 'desc')
        ->take(5)
        ->get();

        // dd($newReviews); //デバッグ

        return Inertia::render('Home',[
            'shops' => $shops,
            'newReviews' => $newReviews,
        ]);
    }

    public function show(Shop $shop)
    {
        $shop->load('reviews.user');

        return Inertia::render('Shop/show',[
            'shop' => $shop
        ]);
    }

    public function detail(int $id)
    {
        $shop = Shop::with('reviews')->find($id);


        // レビューを取得
        $reviews = Review::with('user')
        ->where('shop_id',$id)
        ->orderBy('created_at','desc')
        ->get();

        return Inertia::render('Shop/Detail', [
            'shop' => $shop,
            'reviews' => $reviews,
        ]);
    }
}
