
function superbowlWin(recordArr) {
    const result = recordArr.find(isWin)
    return (result ? result.year : result)
}



function isWin(gameObj) {
    return gameObj.result === "W"
}