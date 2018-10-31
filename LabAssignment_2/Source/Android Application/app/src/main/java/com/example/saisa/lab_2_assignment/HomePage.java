package com.example.saisa.lab_2_assignment;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.google.firebase.auth.FirebaseAuth;

public class HomePage extends AppCompatActivity implements View.OnClickListener {

    private FirebaseAuth firebaseAuth;

    private Button ButtonFlash;
    private Button ButtonSignout;
    private Button ButtonCamera;

    public HomePage() {
    }


    @SuppressLint("WrongViewCast")
    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);
        firebaseAuth = FirebaseAuth.getInstance();

        if(firebaseAuth.getCurrentUser() == null){
            finish();
            startActivity(new Intent(this,LoginActivity.class));
        }
        ButtonSignout = (Button) findViewById(R.id.SignOut);
        ButtonFlash = (Button) findViewById(R.id.Torch);
        ButtonCamera = (Button) findViewById(R.id.OpenCamera);

        ButtonSignout.setOnClickListener(this);
        ButtonFlash.setOnClickListener(this);
        ButtonCamera.setOnClickListener(this);
    }
    @Override
    public void onClick(View view) {
        if(view == ButtonSignout){
            firebaseAuth.signOut();
            finish();
            startActivity(new Intent(this,LoginActivity.class));
        }
        if (view == ButtonFlash){
            startActivity(new Intent(this,FlashLightActivity.class));
        }
        if (view == ButtonCamera){
            startActivity(new Intent(this, CameraActivity.class));
        }
    }
}
