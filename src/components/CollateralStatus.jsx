export default function CollateralStatus() {
  return (
    <div className="p-4 bg-gray-100 border rounded">
      <h3 className="text-lg font-semibold mb-2">BTC Collateral Vault</h3>
      <p>Vault Address:</p>
      <code className="break-all text-sm">
        bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2
      </code>
      <p className="mt-2 text-green-700">⚡ Backed by 1,000,000,000 OCOS</p>
    </div>
  );
}
