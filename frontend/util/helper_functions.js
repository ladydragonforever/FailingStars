export const capitalize = (string) => {
    let strings = string.split(" ");
    
    let newStrings = strings.map (word => word[0].toUpperCase()+word.slice(1))
    
    return newStrings.join(" ");
}