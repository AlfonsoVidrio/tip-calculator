export const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat('en-MX', {
        style: 'currency', currency: 'MXN'
    }).format(quantity)
}