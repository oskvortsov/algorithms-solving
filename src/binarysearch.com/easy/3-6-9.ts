//https://binarysearch.com/problems/3-6-9
class ThreeSixNine {
    solve(n: number): Array<string> {
        const result: string[] = [];

        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 || this.hasNumber369(i)) {
                result.push('clap');
            } else {
                result.push(String(i));
            }
        }

        return result;
    }

    hasNumber369(num: number) {
        while (num > 0) {
            const temp = num % 10;

            if (temp === 3 || temp === 6 || temp === 9) {
                return true
            }

            num = Math.floor(num / 10);
        }

        return false;
    }
}
