let board = [[],[]]
let i = 0
class Knight {
    constructor(xpos,ypos){
        this.x = xpos
        this.y = ypos
    }
    visitedSquare(){
        return new Square(this.x,this.y)
    }
}
class Square {
    constructor(xpos,ypos){
        this.x = xpos
        this.y = ypos
        this.visited = []
    }
    getPosition(){
        return (this.x,this.y)
    }
}

function printPath(start,paths,target){
    console.log("The fastest path from ", [start.x,start.y] , "to ", [target.x,target.y], " was ", paths)
}
console.log(knightTravails([0,0],[4,8]))
function knightTravails(start,target){
    const visited = new Set()
    const startX = start[0]
    const startY = start[1]
    const targetX = target[0]
    const targetY = target[1]
    const travelOffsets = [[1, 2], [1, -2],[2, 1], [2, -1],[-1, 2], [-1, -2],[-2, 1], [-2, -1]]
    const targetSquare = new Square(targetX,targetY)
    const startSquare = new Square(startX,startY)
    let knight = new Knight(startX,startY)
    knight.x = startSquare.x
    knight.y = startSquare.y

    let queue = []
    const paths = []
    let steps = 0
    queue.push([[knight.x,knight.y],[[0,0]]])
    while(queue.length){
        let [current, path] = queue.shift()
        //console.log(current)
        let currentX = current[0]
        let currentY = current[1]
        if(currentX == targetSquare.x && currentY == targetSquare.y){
            path.forEach((path)=>paths.push(path))
            paths.reverse()
            return printPath(startSquare,paths,targetSquare)
        }
        for(const offset of travelOffsets){
            let nextX = currentX + offset[0]
            let nextY = currentY + offset[1]
            let next = [nextX,nextY]
            if(!visited.has(nextX+","+nextY)){
                visited.add(nextX+","+nextY)
                queue.push([next,[next,...path]])
            }
        }
    }
}