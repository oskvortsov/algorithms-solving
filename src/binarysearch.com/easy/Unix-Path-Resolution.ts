// https://binarysearch.com/problems/Unix-Path-Resolution
class UnixPathResolution {
    static solve(path) {
        let current = [];

        for (const dir of path) {
            if (dir == '..') {
                current.length && current.pop();
            } else if (dir !== '.') {
                current.push(dir);
            }
        }

        return current;
    }
}

console.log(
    UnixPathResolution.solve(["usr", "..", "usr", ".", "local", "bin", "docker"]),
    ["usr", "local", "bin", "docker"]
)

console.log(
    UnixPathResolution.solve(["b", "b", "..", ".."]),
    []
)

console.log(
    UnixPathResolution.solve(['a', '.', '..']),
    []
)
