function caculateTax(income: number): number {
    if (income < 50_000) {
        return 1.2
    }
    return 1.5
}