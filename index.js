class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){

    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string = string.charAt(0).toUpperCase() + string.slice(1)
    string = string.split(' ')

    let newArray = []

    for(let i = 0; i<string.length; i++){
      if(words.find(word => word === string[i])){
        newArray.push(string[i])
      }
      else{
        newArray.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
      }
  }

  return newArray.join(' ')

  }
}