package com.example.shopx.Fragements;

import android.annotation.SuppressLint;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.shopx.R;



@SuppressLint("CustomSplashScreen")
public class SplashScreenWelcome extends Fragment {



    public SplashScreenWelcome() {
        // Required empty public constructor
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        new Handler().postDelayed(() -> requireActivity().getSupportFragmentManager().beginTransaction().replace(R.id.frameLayout, new Dashboard()).commit(), 2000);

        return inflater.inflate(R.layout.fragment_spash_screen_welcome, container, false);
    }
}