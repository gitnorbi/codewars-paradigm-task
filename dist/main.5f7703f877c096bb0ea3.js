/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/Js/index.js ***!
  \*************************/
/*Task: 

A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

-Given a string, detect whether or not it is a pangram. 
-Return True if it is, False if not.
-Ignore numbers and punctuation.

*/
// Array for alphabet letters 
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var sentence;
var result;
document.querySelector("#submitButton").addEventListener("click", getInputToVariable);
document.querySelector("#submitButton").addEventListener("click", checkSentence);
document.querySelector("#submitButton").addEventListener("click", showResult); //

function getInputToVariable() {
  sentence = document.querySelector("#InputSentence").value;
}

function checkSentence() {
  result = "Pangrams";
  alphabetLetters.forEach(function (values) {
    var regex = new RegExp(values, 'i');
    var findLetters = sentence.search(regex);

    if (findLetters < 0) {
      result = "not Pangrams";
    }
  });
}

function showResult() {
  document.querySelector(".result").innerHTML = result;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Zjc3MDNmODc3YzA5NmJiMGVhMy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBLElBQU1BLGVBQWUsR0FBRyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFDeEIsR0FEd0IsRUFDcEIsR0FEb0IsRUFDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLEVBQ29CLEdBRHBCLEVBQ3dCLEdBRHhCLEVBQzRCLEdBRDVCLEVBQ2dDLEdBRGhDLEVBQ29DLEdBRHBDLENBQXhCO0FBR0EsSUFBSUMsUUFBSjtBQUVBLElBQUlDLE1BQUo7QUFFQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0VDLGtCQUFsRTtBQUNBSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUFrRUUsYUFBbEU7QUFDQUosUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0VHLFVBQWxFLEdBQ0E7O0FBRUEsU0FBU0Ysa0JBQVQsR0FBNkI7QUFDekJMLEVBQUFBLFFBQVEsR0FBR0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0ssS0FBcEQ7QUFDSDs7QUFFRCxTQUFTRixhQUFULEdBQXlCO0FBQ3pCTCxFQUFBQSxNQUFNLEdBQUMsVUFBUDtBQUNBRixFQUFBQSxlQUFlLENBQUNVLE9BQWhCLENBQXdCLFVBQUNDLE1BQUQsRUFBVTtBQUNsQyxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFZRixNQUFaLEVBQW9CLEdBQXBCLENBQVo7QUFDQSxRQUFJRyxXQUFXLEdBQUNiLFFBQVEsQ0FBQ2MsTUFBVCxDQUFnQkgsS0FBaEIsQ0FBaEI7O0FBRUEsUUFBR0UsV0FBVyxHQUFDLENBQWYsRUFBaUI7QUFDakJaLE1BQUFBLE1BQU0sR0FBQyxjQUFQO0FBRUM7QUFDQSxHQVJEO0FBVUM7O0FBRUQsU0FBU00sVUFBVCxHQUFxQjtBQUNqQkwsRUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDWSxTQUFsQyxHQUE4Q2QsTUFBOUM7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0ZWN0LXBhbmdyYW0vLi9zcmMvSnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypUYXNrOiBcclxuXHJcbkEgcGFuZ3JhbSBpcyBhIHNlbnRlbmNlIHRoYXQgY29udGFpbnMgZXZlcnkgc2luZ2xlIGxldHRlciBvZiB0aGUgYWxwaGFiZXQgYXQgbGVhc3Qgb25jZS4gXHJcbkZvciBleGFtcGxlLCB0aGUgc2VudGVuY2UgXCJUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nXCIgaXMgYSBwYW5ncmFtLCBcclxuYmVjYXVzZSBpdCB1c2VzIHRoZSBsZXR0ZXJzIEEtWiBhdCBsZWFzdCBvbmNlIChjYXNlIGlzIGlycmVsZXZhbnQpLlxyXG5cclxuLUdpdmVuIGEgc3RyaW5nLCBkZXRlY3Qgd2hldGhlciBvciBub3QgaXQgaXMgYSBwYW5ncmFtLiBcclxuLVJldHVybiBUcnVlIGlmIGl0IGlzLCBGYWxzZSBpZiBub3QuXHJcbi1JZ25vcmUgbnVtYmVycyBhbmQgcHVuY3R1YXRpb24uXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vLyBBcnJheSBmb3IgYWxwaGFiZXQgbGV0dGVycyBcclxuY29uc3QgYWxwaGFiZXRMZXR0ZXJzID0gW1wiYVwiLFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiLFwiaVwiLFwialwiLFxyXG5cImtcIixcImxcIixcIm1cIixcIm5cIixcIm9cIixcInBcIixcInFcIixcInJcIixcInNcIixcInRcIixcInVcIixcInZcIixcIndcIixcInhcIixcInlcIixcInpcIl07XHJcblxyXG5sZXQgc2VudGVuY2U7XHJcblxyXG5sZXQgcmVzdWx0O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldElucHV0VG9WYXJpYWJsZSk7IFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tTZW50ZW5jZSk7IFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Jlc3VsdCk7IFxyXG4vL1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRUb1ZhcmlhYmxlKCl7XHJcbiAgICBzZW50ZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjSW5wdXRTZW50ZW5jZVwiKS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTZW50ZW5jZSgpIHtcclxucmVzdWx0PVwiUGFuZ3JhbXNcIlxyXG5hbHBoYWJldExldHRlcnMuZm9yRWFjaCgodmFsdWVzKT0+e1xyXG5sZXQgcmVnZXggPSBuZXcgUmVnRXhwKCB2YWx1ZXMsICdpJyApO1xyXG5sZXQgZmluZExldHRlcnM9c2VudGVuY2Uuc2VhcmNoKHJlZ2V4KTtcclxuXHJcbmlmKGZpbmRMZXR0ZXJzPDApe1xyXG5yZXN1bHQ9XCJub3QgUGFuZ3JhbXNcIlxyXG5cclxufVxyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIikuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImFscGhhYmV0TGV0dGVycyIsInNlbnRlbmNlIiwicmVzdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldElucHV0VG9WYXJpYWJsZSIsImNoZWNrU2VudGVuY2UiLCJzaG93UmVzdWx0IiwidmFsdWUiLCJmb3JFYWNoIiwidmFsdWVzIiwicmVnZXgiLCJSZWdFeHAiLCJmaW5kTGV0dGVycyIsInNlYXJjaCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=