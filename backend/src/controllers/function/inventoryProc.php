<?php 
//get all inventory 
function getAllinventory($db) {

    
    $sql = 'Select * FROM inventory '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get inventory by id 
function getinventory($db, $medicineId) {

    $sql = 'Select o.medicineID, o.medicineName, o.medicineQuantity, o.medicineEXP, o.medicineBatchNo, o.medicineSupplier FROM inventory o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $medicineId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new inventory 
function createinventory($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into inventory ( medicineID, medicineName, medicineQuantity, medicineEXP, medicineBatchNo, medicineSupplier)'; 
    $sql .= 'values (:medicineID, :medicineName, :medicineQuantity, :medicineEXP, :medicineBatchNo, :medicineSupplier)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':medicineID', $form_data['medicineID']);  
    $stmt->bindParam(':medicineName', ($form_data['medicineName']));
    $stmt->bindParam(':medicineQuantity', ($form_data['medicineQuantity']));
    $stmt->bindParam(':medicineEXP', ($form_data['medicineEXP']));
    $stmt->bindParam(':medicineBatchNo', ($form_data['medicineBatchNo']));
    $stmt->bindParam(':medicineSupplier', ($form_data['medicineSupplier']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete inventory by id 
function deleteinventory($db,$medicineId) { 

    $sql = ' Delete from inventory where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$medicineId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update inventory by id 
function updateinventory($db,$form_dat,$medicineId) { 

    
    $sql = 'UPDATE inventory SET medicineID = :medicineID, medicineName = :medicineName , medicineQuantity = :medicineQuantity , medicineEXP = :medicineEXP , medicineBatchNo = :medicineBatchNo, medicineSupplier = :medicineSupplier '; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$medicineId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':medicineID', $form_dat['medicineID']);    
    $stmt->bindParam(':medicineName', ($form_dat['medicineName']));
    $stmt->bindParam(':medicineQuantity', ($form_dat['medicineQuantity']));
    $stmt->bindParam(':medicineEXP', ($form_dat['medicineEXP']));
    $stmt->bindParam(':medicineBatchNo', ($form_dat['medicineBatchNo']));
    $stmt->bindParam(':medicineSupplier', ($form_dat['medicineSupplier']));
    $stmt->execute(); 
}