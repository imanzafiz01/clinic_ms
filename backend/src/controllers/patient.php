<?php 

use Slim\Http\Request; //namespace 
use Slim\Http\Response; //namespace 

//include adminProc.php file 
include __DIR__ .'/function/patientProc.php';
include __DIR__ .'/function/inventoryProc.php';


//alow cors
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});
//end

// FOR patient

//read table student 
$app->get('/patient', function (Request $request, Response $response, array $arg){

    return $this->response->withJson(array('data' => 'success'), 200); });  
 
// read all data from table student 
$app->get('/allpatient',function (Request $request, Response $response,  array $arg) { 

    $data = getAllpatient($this->db); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 

//request table order by condition (medicine id) 
$app->get('/patient/[{id}]', function ($request, $response, $args){   
    $patientId = $args['id']; 
    if (!is_numeric($patientId)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);  
} 
    $data = getpatient($this->db, $patientId); 
    if (empty($data)) { 

        return $this->response->withJson(array('error' => 'no data'), 500); 
} 

return $this->response->withJson(array('data' => $data), 200);});

//post method order
$app->post('/patient/add', function ($request, $response, $args) { 

    $form_data = $request->getParsedBody(); 
    $data = createpatient($this->db, $form_data); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 


//delete row Order
$app->delete('/patient/del/[{id}]', function ($request, $response, $args){   
    $patientId = $args['id']; 
    
   if (!is_numeric($patientId)) { 

       return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
       $data = deletepatient($this->db,$patientId); 
       if (empty($data)) { 

           return $this->response->withJson(array($patientId=> 'is successfully deleted'), 202);}; }); 
 

   
//put table order 
$app->put('/patient/put/[{id}]', function ($request, $response, $args){
    $patientId = $args['id']; 
    
    if (!is_numeric($patientId)) { 
        
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
        $form_dat=$request->getParsedBody(); 
        $data=updatepatient($this->db,$form_dat,$patientId); 
        if ($data <=0)
        return $this->response->withJson(array('data' => 'successfully updated'), 200); 
});
   
// FOR inventory

//read table inventory 
$app->get('/inventory', function (Request $request, Response $response, array $arg){

    return $this->response->withJson(array('data' => 'success'), 200); });  
 
// read all data from table inventory 
$app->get('/allinventory',function (Request $request, Response $response,  array $arg) { 

    $data = getAllinventory($this->db); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 

//request table order by condition (medicine id) 
$app->get('/inventory/[{id}]', function ($request, $response, $args){   
    $medicineId = $args['id']; 
    if (!is_numeric($medicineId)) { 
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);  
} 
    $data = getinventory($this->db, $medicineId); 
    if (empty($data)) { 

        return $this->response->withJson(array('error' => 'no data'), 500); 
} 

return $this->response->withJson(array('data' => $data), 200);});

//post method order
$app->post('/inventory/add', function ($request, $response, $args) { 

    $form_data = $request->getParsedBody(); 
    $data = createinventory($this->db, $form_data); 
    if (is_null($data)) { 

        return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404); 
} 
    return $this->response->withJson(array('data' => $data), 200); }); 


//delete row Order
$app->delete('/inventory/del/[{id}]', function ($request, $response, $args){   
    $medicineId = $args['id']; 
    
   if (!is_numeric($medicineId)) { 

       return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
       $data = deleteinventory($this->db,$medicineId); 
       if (empty($data)) { 

           return $this->response->withJson(array($medicineId=> 'is successfully deleted'), 202);}; }); 
 

   
//put table order 
$app->put('/inventory/put/[{id}]', function ($request, $response, $args){
    $medicineId = $args['id']; 
    
    if (!is_numeric($medicineId)) { 
        
        return $this->response->withJson(array('error' => 'numeric paremeter required'), 422); } 
        $form_dat=$request->getParsedBody(); 
        $data=updateinventory($this->db,$form_dat,$medicineId); 
        if ($data <=0)
        return $this->response->withJson(array('data' => 'successfully updated'), 200); 
});
   
