@extends((( Request::ajax()) ? 'landing.partials.layout_ajax' : 'landing.partials.layout_main' ))

@section('content')
    <h1>Hello world</h1>
@endsection

@section('scripts')

@endsection
