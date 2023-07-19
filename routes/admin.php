<?php

Route::get('/', function () {
    return view('admin.main');
})->name('main');

Route::get('/{any}', function (){
    return view('admin.main');
})->where('any','.*');
