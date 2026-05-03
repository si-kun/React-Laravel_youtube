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
}
