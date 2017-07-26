<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Registration extends Controller
{
    public function postRegister(Request $request){
        //Retrieve the name input field
        $myName = $request->input('myName');
        if (empty($myName)) {
            return redirect('/');
        }
        else {
            return view('welcome', [
                'myName' => $myName,
            ]);
        }
    }
}
