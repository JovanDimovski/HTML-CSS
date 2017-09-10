@extends('layouts.master')

@section('content')
<div class="row">
    <div class="col-md-12">
        <h1>Welcome</h1>
        <p>{{3>=2 ? "ABC" : "DEF"}}</p>
        <p>{{3>=4 ? "ABC" : "DEF"}}</p>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <h2>Control structures</h1>
        @if(3<2)
        <p>In if</p>
        @else
        <p>In else</p>
        @endif
        <hr>
        <ul>
        @for($i=0;$i<10;$i++)
            <li>{{$i}}</li>
        @endfor
        <!-- Postoi i foreach loop  -->
        </ul>
        <hr>
        <h2>XSS</h2>
        <h3>Escaped Html</h3>
        {{'<script>alert("Hello")</script>'}}
        <h3>Html that is not escaped</h3>
        <p>There is a comented out script tag below this paragraph that executes on each page load</p>
        <!-- {!!'<script>alert("Hello")</script>'!!} -->
        
    </div>
</div>
@endsection