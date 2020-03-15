<?php
$servername = "dist";
$username = "root";
$password = "";
$dbname = "soapideas";

function connect() {
	$conn = mysqli_connect("dist", "root", "", "soapideas");
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	mysqli_set_charset($conn, "utf8");
	return $conn;
}

function init() {
	$conn = connect();
	$sql = "SELECT id, name FROM allgoods";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)) {
			$out[$row["id"]] = $row;
		}
		echo json_encode($out);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}


function selectOneGoods() {
	$conn = connect();
	$id = $_POST['gid'];
	$sql = "SELECT * FROM allgoods WHERE id = '$id'";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
		$row = mysqli_fetch_assoc($result);
		echo json_encode($row);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}

function updateGoods() {
	$conn = connect();
	$id = $_POST['id'];
	$name = $_POST['gname'];
	$price = $_POST['gprice'];
	$gallery = $_POST['ggallery'];
	$img = $_POST['gimg'];
	$description1 = $_POST['gdescription1'];
	$description2 = $_POST['gdescription2'];
	$sql = "UPDATE allgoods SET name = '$name', price = '$price', gallery = '$gallery', img = '$img', description1 = '$description1', description2 = '$description2' WHERE id = '$id' ";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}
	mysqli_close($conn);
	writeJSON();
}
function newGoods() {
	$conn = connect();
	$name = $_POST['gname'];
	$price = $_POST['gprice'];
	$gallery = $_POST['ggallery'];
	$img = $_POST['gimg'];
	$description1 = $_POST['gdescription1'];
	$description2 = $_POST['gdescription2'];
	$sql = "INSERT INTO allgoods(name, price, gallery, img, description1, description2)
	VALUES ('$name', '$price', '$gallery', '$img', '$description1' , '$description2')";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}
	mysqli_close($conn);
	writeJSON();
}
function deleteGoods() {
	$conn = connect();
	$id = $_POST['id'];
	$sql = "DELETE FROM allgoods  WHERE id = '$id' ";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}
	mysqli_close($conn);
	writeJSON();
}

function writeJSON() {
	$conn = connect();
	$sql = "SELECT * FROM allgoods";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)) {
			$out[$row["id"]] = $row;
		}
		file_put_contents('../data/allGoods.json', json_encode($out));
	} else {
		echo "0";
	}
	mysqli_close($conn);
}