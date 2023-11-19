<?php 
//get all patient 
function getAllpatient($db) {

    
    $sql = 'Select * FROM patient'; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get patient by id 
function getpatient($db, $patientId) {

    $sql = 'Select o.patientID, o.patientName, o.patientAge, o.patientContact FROM patient o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $patientId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new patient 
function createpatient($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into patient ( patientID, patientName, patientAge, patientContact)'; 
    $sql .= 'values (:patientID, :patientName, :patientAge, :patientContact)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':patientID', $form_data['patientID']);  
    $stmt->bindParam(':patientName', ($form_data['patientName']));
    $stmt->bindParam(':patientAge', ($form_data['patientAge']));
    $stmt->bindParam(':patientContact', ($form_data['patientContact']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete patient by id 
function deletepatient($db,$patientId) { 

    $sql = ' Delete from patient where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$patientId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update patient by id 
function updatepatient($db,$form_dat,$patientId) { 

    
    $sql = 'UPDATE patient SET patientID = :patientID, patientName = :patientName , patientAge = :patientAge , patientContact = :patientContact'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$patientId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':patientID', $form_dat['patientID']);    
    $stmt->bindParam(':patientName', ($form_dat['patientName']));
    $stmt->bindParam(':patientAge', ($form_dat['patientAge']));
    $stmt->bindParam(':patientContact', ($form_dat['patientContact']));
    $stmt->execute(); 
}