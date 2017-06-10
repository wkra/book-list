var app =angular.module('mainApp',[]);
app.controller('booksApp', function($scope, $http){

// wyświetlanie
	//$scope.books = [];

	$scope.displayData = function(){
		$http.get("books.json")
			.then(function mySucces(response){
				$scope.books = response.data;
				
			},function mySucces(response){
				console.log("error displayData");
			});
		}


// dodawanie
  	$scope.addbook = {};
	$scope.insertdata=function(){
		alert("Dodawanie książek w tej wersji jest nieaktywne");
			$scope.addbook.addimie = null;				
			$scope.addbook.addnazwisko = null;
			$scope.addbook.addtytul = null;
			$scope.addbook.addwydanie = null;
			$scope.addbook.addwydawnictwo = null;
			$scope.addbook.addrok = null;
			$scope.checkAddbook = 0;
		
/*	 	-------------------------
			ADD BOOK TO DB
		-------------------------
		
		$http.post("db/addbook.php", {
			'addimie':$scope.addbook.addimie, 
			'addnazwisko':$scope.addbook.addnazwisko, 
			'addtytul':$scope.addbook.addtytul, 
			'addwydawnictwo':$scope.addbook.addwydawnictwo, 
			'addwydanie':$scope.addbook.addwydanie, 
			'addrok':$scope.addbook.addrok})

		.then(function mySucces(response){ 
			alert("Książka dodana poprawnie");
			$scope.addbook.addimie = null;				
			$scope.addbook.addnazwisko = null;
			$scope.addbook.addtytul = null;
			$scope.addbook.addwydanie = null;
			$scope.addbook.addwydawnictwo = null;
			$scope.addbook.addrok = null;
			$scope.checkAddbook = 0;
			
			$scope.displayData();
		},function myError(response){
				alert("Książka nie może zostać odana!");
				console.error(response);

                });
*/
	}

//usuwanie



	$scope.rembook= function (id){
		
		alert ("Usuwanie książek w tej wersji jest nieaktywne.");
		
/*	 	-------------------------
			REMOVE BOOK FROM DB
		-------------------------
			$http.post ("db/rembook.php",{
				'remid':id,
			})
		.then(function mySuccesRem (response){
			alert("Książka usunię poprawnie");
			
			$scope.displayData();
			
		}, function myErrorRem (response) {
			alert ("Książka nie może być usunięta!");
			console.error(response);
		});
*/
		
	}
// edycja/update


	
$scope.editbook=function(id, first_name, last_name, title, publisher, edition, year){
$scope.blockBookFromId = parseInt($scope.blockBookFromId,10);

	if (id > $scope.blockBookFromId){
		alert("Książka edytowana poprawnie.");
/*	 	-------------------------
			EDIT BOOK TO DB
		-------------------------	
	
		$http.post("db/editbook.php", {
			
			'id':id,
			'first_name':first_name, 
			'last_name':last_name, 
			'title':title, 
			'publisher':publisher, 
			'edition':edition, 
			'year':year})

		.then(function mySucces(response){ 
			

			alert("Książka edytowana poprawnie");
			$scope.displayData();
		},function myError(response){
				alert("Książka nie może być edytowana!");
				console.error(response);

                });
*/
	} else  {
		alert("Ta książka jest zablokowana. Wybierz inną.");
		
		$scope.displayData();
		
	}
	}

// blokada książek
$scope.blockBookFromId = 0;
/*	 	--------------------------------------------------
			BLOKADA KSIĄŻEK Z DB OD USTALONEGO ID
		--------------------------------------------------

$scope.blockBookFromId = [];
$scope.blockBook = function(){
	
		$http.get("db/selectblockbooks.php")
			.then(function mySucces(response){
				$scope.blockBookFromId = response.data;
				
			},function mySucces(response){
				console.log("error");
			});

		}
*/
// segregacja

	$scope.propertyName = 'last_name';
	$scope.reverse = true;

	$scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  
// walidacja block
$scope.validationBlockBookFlag = false;

$scope.validationBlockBook = function(id, editRemove){
	self=this;
	$scope.blockBookFromId = parseInt($scope.blockBookFromId,10);
	self.id=parseInt(id,10);

	if (id > $scope.blockBookFromId){
		if (editRemove == 'edit'){
		$scope.toogleAllShow();
		
		} if (editRemove == 'remove'){
			r = confirm("Czy na pewno chcesz usunąć książkę o ID: "+self.id+"?");
			if (r == true){
				$scope.rembook(self.id)
			} else {
				alert ("Książka nie zostanie usunięta!");
			}
		}
	} else {
		alert("Ta książka jest zablokowana. Wybierz inną.");
	}
}
// zmiana show: Forms, Pencil Ok Cancel Remove

$scope.toogleAllShow = function () {
	self.showForms=self.showForms === true ? false: true; 
		self.showPencil=self.showPencil === true ? false: true;
		self.showOk = self.showOk=== true ? false: true;
		self.showCancel = self.showCancel=== true ? false: true;
		self.showRemove = self.showRemove=== true ? false: true;
}


	});