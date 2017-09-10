@if(count($errors->all()))
<div class="row">
    <div class="col-md-12">
        <div class="alert alert-danger">
        @foreach($errors->all() as $error)
            <p>{{$error}}</p>
        @endforeach
        </div>
    </div>
</div>
@endif