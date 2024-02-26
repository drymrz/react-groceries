export default function Footer({ items }) {
    if (items.length === 0) return (<footer className="stats">Tidak ada barang di daftar belanjaan</footer>)

    const totalItems = items.length;
    const totalChecked = items.filter((item) => item.checked).length;
    const percentage = totalItems === 0 ? 0 : Math.round(totalChecked / totalItems * 100);

    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {totalChecked} barang sudah dibeli ({percentage}%)</footer>
}