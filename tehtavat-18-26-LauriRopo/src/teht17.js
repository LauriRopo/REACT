import React, { useState, useEffect } from "react";

const Asiakas = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3004/asiakas");
    const data = await response.json();
    setCustomers(data);
    setLoading(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    setNotFound(false);
    const response = await fetch(
      `http://localhost:3004/asiakas?nimi=${name}&osoite=${address}&tyyppi_selite=${customerType}`
    );
    const data = await response.json();
    if (data.length === 0) {
      setNotFound(true);
    } else {
      setCustomers(data);
    }
    setLoading(false);
  };

  const deleteCustomer = async (id, name) => {
    const confirmDelete = window.confirm(
      `Haluatko varmasti poistaa asiakkaan ${name}?`
    );
    if (confirmDelete) {
      await fetch(`http://localhost:3004/asiakas/${id}`, {
        method: "DELETE",
      });
      fetchCustomers();
    }
  };

  const renderCustomers = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nimi</th>
            <th>Osoite</th>
            <th>Postinumero</th>
            <th>Postitoimipaikka</th>
            <th>Puhelinnumero</th>
            <th>Tyyppi_id</th>
            <th>Tyyppi_selite</th>
            <th>Poista</th>
            <th>Muokkaa</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.nimi}</td>
              <td>{customer.osoite}</td>
              <td>{customer.postinumero}</td>
              <td>{customer.postitoimipaikka}</td>
              <td>{customer.puhelinnro}</td>
              <td>{customer.tyyppi_id}</td>
              <td>{customer.tyyppi_selite}</td>
              <td>
                <button
                  data-testid={`deleteButton${customer.id}`}
                  onClick={() => deleteCustomer(customer.id, customer.nimi)}
                >
                  Poista
                </button>
              </td>
              <td>
                <button data-testid={`editButton${customer.id}`}>
                  Muokkaa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <label htmlFor="nameInput">Nimi</label>
      <input
        type="text"
        id="nameInput"
        data-testid="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="addressInput">Osoite</label>
      <input
        type="text"
        id="addressInput"
        data-testid="addressInput"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="customertypeSelect">Asiakastyyppi</label>
      <select
        id="customertypeSelect"
        data-testid="customertypeSelect"
        value={customerType}
        onChange={(e) => setCustomerType(e.target.value)}
      >
        <option value="">Valitse</option>
        <option value="1">Asiakas1</option>
        <option value="2">Asiakas2</option>
      </select>
      <button data-testid="searchButton" onClick={handleSearch}>
        Hae
      </button>
      {loading && <p data-testid="loading">Loading...</p>}
      {notFound && (
        <p data-testid="notFound">Annetuilla hakuehdoilla ei löytynyt dataa</p>
      )}
      {!loading && !notFound && renderCustomers()}
    </div>
  );
};

export { Asiakas };
