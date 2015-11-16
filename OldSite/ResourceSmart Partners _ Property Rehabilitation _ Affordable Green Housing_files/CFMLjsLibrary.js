function abs(x) {return Math.abs(x);}
function acos(x) {return Math.acos(x);}
function arrayappend(array,value){ eval(array)[eval(array).length] = value }
function arrayavg(array){x=0;for(i=0;i<eval(array).length;i++) {x+=eval(array)[i];}v = x/eval(array).length;return v;}
function arrayclear(array){ eval(array).length=0; return true; }
function arraydeleteat(array,position){ eval(array).splice(position-1,1); return true; }
function arrayinsertat(array,position,value){ eval(array).splice(position-1,0,value); return true; }
function arrayisempty(array){ if (eval(array).length==0) {return true;} else {return false;}}
function arraylen(array){ return eval(array).length }
function arraymax(array){ x = eval(array)[0]; for(i=0;i<eval(array).length;i++){ x = Math.max(x,eval(array)[i])} return x }
function arraymin(array){ x = eval(array)[0]; for(i=0;i<eval(array).length;i++){ x = Math.min(x,eval(array)[i])} return x }
function arrayprepend(array,value){ add = eval(array).splice(0,0,value); return true; }
function arrayresize(array,value){ eval(array).length = value; return true; }
function arrayset(array, start_pos, end_pos, value){ for(i=start_pos-1;i<end_pos;i++) { eval(array)[i] = value } return true; }
function arraysum(array, start_pos, end_pos, value){ var x=0; for(i=0;i<eval(array).length;i++) {x += eval(array)[i] } return x; }
function arrayswap(array, position1, position2){ x = array[position1-1]; y = array[position2-1]; array[position2-1] = x; array[position1-1] = y; return true; }
function arraytolist(array,  delimiter ) { if(!delimiter){var delimiter=','} x = eval(array).join(delimiter); return x; }
function arraysort(array, sort_type , sort_order ) { if(!sort_type){var sort_type='text'} if(!sort_type){var sort_type='asc'}}
function asc(mystring) {return mystring.charCodeAt(0);}
function asin(x) {return Math.asin(x);}
function atan(x) {return Math.atan(x);}
function bitand(number1,  number2 ) { x = number1 & number2; return x;}
function bitnot(number) { x =  ~ number; return x;}
function bitor(number1,  number2 ) { x = number1 | number2; return x; }
function bitshln(number,  count ) { x = number << count; return x; }
function bitshrn(number,  count ) { x = number >> count; return x; }
function bitxor(number1,  number2 ) { x = number1 ^ number2; return x; }
function ceiling(x) {return Math.ceil(x);}
function chr(number) {return String.fromCharCode(number);}
function cjustify(mystring,number) { NoOfCharsToAdd = Math.floor((number - mystring.length) / 2); for(i=0;i<NoOfCharsToAdd;i++) {mystring = ' ' + mystring + ' ' } if(mystring.length < number){mystring += ' '} return mystring }
function compare(string1, string2) {if(string1==string2){ x= 0 } else { for(i=0;i<Math.max(string1.length,string2.length);i++){if(string1.charCodeAt(i)!=string2.charCodeAt(i)){if (string1.charCodeAt(i) < string2.charCodeAt(i)) {x = -1;} if (string1.charCodeAt(i) > string2.charCodeAt(i)) {x = 1;} break;}}}return x;}
function comparenocase(string1, string2) { string1 = string1.toUpperCase(); string2 = string2.toUpperCase(); if(string1==string2){x= 0}else{ for(i=0;i<Math.max(string1.length,string2.length);i++){ if(string1.charCodeAt(i)!=string2.charCodeAt(i)) { if (string1.charCodeAt(i) < string2.charCodeAt(i)) {x = -1;} if (string1.charCodeAt(i) > string2.charCodeAt(i)) {x = 1;} break; }}} return x;}
function createdate(myyear,mymonth,myday) { mydate = new Date(myyear,mymonth,myday); return mydate; }
function createdatetime(myyear,mymonth,myday,myhour,myminute,mysecond) { mydate = new Date(myyear,mymonth,myday,myhour,myminute,mysecond);return mydate;}
function cos(x) {return Math.cos(x);}
function day(datestring) {return datestring.getDate();}
function dayofweek(datestring) {return datestring.getDay()+1;}
function dayofweekasstring(datestring) {x = datestring.getDay()+1;if(x==1){_string='Sunday'}if(x==2){_string='Monday'}if(x==3){_string='Tuesday'}if(x==4){_string='Wednesday'}if(x==5){_string='Thursday'}if(x==6){_string='Friday'}if(x==7){_string='Saturday'}return _string}
function daysinmonth(datestring) {x = datestring.getMonth()+1;if (x==1||x==3||x==5||x==7||x==8||x==10||x==12){return 31};if (x==2){return 28};if (x==4||x==6||x==9||x==11){return 30};}
function isleapyear(year){ return (year%4 == 0 && (year%100 != 0 || year%400 == 0) ? true : false)}
function dollarformat(number) { if(number<0){number = '($' + number +')'} else{number = '$' + number} return number; }
function  decrementvalue(number)  {return number-1;}
function encrypt(mystring, key){ Ref="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz._~"; key = parseInt(key);var Temp="";for (Count=0; Count < mystring.length; Count++) {var TempChar = mystring.substring (Count, Count+1);var Conv = Ref.indexOf(TempChar);var Cipher=Conv^key;Cipher=Ref.substring(Cipher, Cipher+1);Temp += Cipher;} return (Temp);}
function evaluate(stringexpression){ return eval(stringexpression);}
function find(mysubstring,mystring,mystart){if(!mystart){var mystart=0;}else{mystart = mystart - 1;}return mystring.indexOf(mysubstring, mystart)+1;}
function findnocase(mysubstring,mystring,mystart){if(!mystart){var mystart=0;}else{mystart = mystart - 1;}mystring = mystring.toUpperCase();mysubstring = mysubstring.toUpperCase();return mystring.indexOf(mysubstring, mystart)+1;}
function  fix(number) {if(number<0){return Math.ceil(number);}else {return Math.floor(number);}}
function hour(datestring) {return datestring.getHours();}
function  iif(condition, string_expression1, string_expression2) {return (eval(condition) ? string_expression1 :  string_expression2 )}
function  incrementvalue(number)  {return number+1;}
function  inputbasen(number, radix) {return parseInt(number, radix);}
function insert(mysubstring, mystring, position){ return mystring.substring(0,position) + mysubstring + mystring.substring(position,mystring.length);}
function exp(x){ return Math.exp(x);}
function lcase(mystring)  {return mystring.toLowerCase()}
function left(mystring,count)  {return mystring.substring(mystring.length-count,mystring.length);}
function len(mystring)  {return mystring.length;}
function listappend(list,value,delimiters) {
if(!delimiters){var delimiters=','}
_TempListFirstSplitArray = list.split(delimiters)
added = _TempListFirstSplitArray.splice(_TempListFirstSplitArray.length,0,value)
_TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
return _TempStringToReturn
}

function listchangedelims(list,new_delimiters,delimiters) {
if(!delimiters){var delimiters=','}
_TempListSplitArray = list.split(delimiters)
_TempStringToReturn = _TempListSplitArray.join(new_delimiters)
return _TempStringToReturn
}
function listcontains(list, mysubstring , delimiters) {if(!delimiters){var delimiters=','}x=0;_TempListSplitArray = list.split(delimiters);for(i=0;i<_TempListSplitArray.length;i++){if (_TempListSplitArray[i].indexOf(mysubstring)!=-1) {x = i+1;} }return x;}
function listcontainsnocase(list, mysubstring , delimiters) {if(!delimiters){var delimiters=','}x=0;list = list.toUpperCase();mysubstring = mysubstring.toUpperCase();_TempListSplitArray = list.split(delimiters);for(i=0;i<_TempListSplitArray.length;i++){if (_TempListSplitArray[i].indexOf(mysubstring)!=-1) {x = i+1;} }return x;}
function listdeleteat(list,position,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);removed = _TempListFirstSplitArray.splice(position-1,1);_TempStringToReturn = _TempListFirstSplitArray.join(delimiters);return _TempStringToReturn;}
function listfind(list,value,delimiters) {if(!delimiters){var delimiters=','}_TempListSplitArray = list.split(delimiters);FoundIdx = 0;for(i=0;i<_TempListSplitArray.length;i++){if(_TempListSplitArray[i]==value)	{FoundIdx= i+1;break}}return FoundIdx;}
function listfindnocase(list,value,delimiters) {if(!delimiters){var delimiters=','}list = list.toUpperCase();value = value.toUpperCase();_TempListSplitArray = list.split(delimiters);FoundIdx = 0;for(i=0;i<_TempListSplitArray.length;i++){if(_TempListSplitArray[i]==value)	{	FoundIdx= i+1;	break	}}return FoundIdx}
function listfirst(list,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);return _TempListFirstSplitArray[0]}
function listgetat(list,position,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);return _TempListFirstSplitArray[position-1]}
function listinsertat(list,position,value,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);added = _TempListFirstSplitArray.splice(position-1,0,value);_TempStringToReturn = _TempListFirstSplitArray.join(delimiters);return _TempStringToReturn;}
function listlast(list,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);return _TempListFirstSplitArray[_TempListFirstSplitArray.length-1]}
function listlen(list,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);return _TempListFirstSplitArray.length}
function listprepend(list,value,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);added = _TempListFirstSplitArray.splice(0,0,value);_TempStringToReturn = _TempListFirstSplitArray.join(delimiters);return _TempStringToReturn;}
function listsetat(list,position,value,delimiters) {if(!delimiters){var delimiters=','}_TempListFirstSplitArray = list.split(delimiters);_TempListFirstSplitArray[position-1]=value;_TempStringToReturn = _TempListFirstSplitArray.join(delimiters);return _TempStringToReturn}
function listtoarray(list,delimiters) {if(!delimiters){var delimiters=','}_TempListSplitArray = list.split(delimiters);return _TempListSplitArray}
function listvaluecount(list,value,delimiters) {if(!delimiters){var delimiters=','}_TempListSplitArray = list.split(delimiters);FoundIdx = 0;for(i=0;i<_TempListSplitArray.length;i++){if(_TempListSplitArray[i]==value){FoundIdx++;}}return FoundIdx}
function ljustify(mystring, number) {NoOfCharsToAdd = number - mystring.length;for(i=0;i<NoOfCharsToAdd;i++){mystring = ' ' + mystring }return mystring}
function log(number) {return Math.log(number);}
function ltrim(myString) {
i=0;do {i++}while ( i < myString.length && (myString.charCodeAt(i)==32 || myString.charCodeAt(i)=='NaN') );return myString.substr(i,myString.length)}
function max(x,y) {return Math.max(x,y);}
function mid(myString,start,count){return myString.substr(start-1,count)}
function min(x,y) {return Math.min(x,y);}
function minute(datestring) {return datestring.getMinutes();}
function month(datestring) {return datestring.getMonth();}
function now(){_NewDate = new Date();return _NewDate}
function pi() {return Math.PI;}
function rand() { return Math.random();}
function repeatstring(string,count){var _NewString = '';for(i=0;i<count;i++){_NewString += string}return _NewString} 
function removechars(mystring, start, count){new_string = mystring.slice(0,start-1);new_string2 = mystring.slice(start+count-1);return new_string + new_string2}
function  replace(string, substring1, substring2 , scope ){if(!scope){scope='1'}if(scope!='ALL'){scope='1'}re = '/'+substring1;if(scope=='1'){re += '/'}else{re +='/g'}new_string = string.replace(eval(re),substring2);return new_string}
function  replacelist(mystring, list1, list2 ) {delimiters = ',';_TempList1SplitArray = list1.split(delimiters);_TempList2SplitArray = list2.split(delimiters);for(i=0;i<_TempList1SplitArray.length;i++){stringtoreplace = '/'+_TempList1SplitArray[i]+'/g';mystring = mystring.replace(eval(stringtoreplace),_TempList2SplitArray[i]);}return mystring}
function  replacenocase(string, substring1, substring2 , scope ){if(!scope){scope='1'}if(scope!='ALL'){scope='1'}re = '/'+substring1;if(scope=='1'){re += '/i'}else{re +='/gi'}new_string = string.replace(eval(re),substring2);return new_string}
function rereplace(mystring, reg_expression, substring2 , scope ){if(!scope){scope='ONE'}if(scope!='ALL'){scope='ONE'}else{reg_expression = reg_expression + '/g'}new_string = mystring.replace(reg_expression,substring2);return new_string;}
function rereplacenocase(mystring, reg_expression, substring2 , scope ){if(!scope){scope='ONE'}if(scope!='ALL'){reg_expression = '/'+reg_expression + '/i'}else{reg_expression = '/'+reg_expression + '/gi'}new_string = mystring.replace(eval(reg_expression),substring2);return new_string;}
function reverse(mystring) {var _TempNewString = '';for(i=0;i<mystring.length;i++){_TempNewString = mystring.charAt(i) + _TempNewString;}return _TempNewString;}
function right(string,count) {return string.substr(0,count);}
function rjustify(mystring, number) {NoOfCharsToAdd = number - mystring.length;for(i=0;i<NoOfCharsToAdd;i++){mystring =  mystring + ' '}return mystring}
function round(number)  {return Math.round(number);}
function rtrim(myString) {i=myString.length;do {i--}while (myString.charCodeAt(i)==32 || myString.charCodeAt(i)=='NaN' );return myString.substr(0,i+1);}
function second(datestring) {return datestring.getSeconds();}
function sin(x) {return Math.sin(x);}
function sgn(x) {if(x==0){return 0}if(x>0){return 1}if(x<0){return -1}}
function sqr(x) {return Math.sqrt(x);}
function tan(x) {return Math.tan(x);}
function trim(myString) {return rtrim(ltrim(myString));}
function ucase(mystring)  {return mystring.toUpperCase()}
function val(myString) {newstring = "";for(i=0;i<myString.length;i++){if(myString.charAt(i)=='1' || myString.charAt(i)=='2' || myString.charAt(i)=='3' || myString.charAt(i)=='4' || myString.charAt(i)=='5' || myString.charAt(i)=='6' || myString.charAt(i)=='7' || myString.charAt(i)=='8' || myString.charAt(i)=='9' || myString.charAt(i)=='0' || myString.charAt(i)=='.' || myString.charAt(i)=='+' || myString.charAt(i)=='-'){ newstring+= myString.charAt(i)}else{break;}}return newstring;}
function urlencodedformat(myString) {return escape(myString);}
function year(mydate) {_newDate = new Date(mydate);return _newDate.getYear();}
function yesnoformat(value) {if(value==0){return 'NO'}else {return 'YES'}}