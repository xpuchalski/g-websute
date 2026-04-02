import pricesImage from '../assets/Prices.png'

export default function ContactPricingPage() {
  return (
    <div className="page" >
      <h2>Contact &amp; Pricing</h2>

      <section className="contact-block" style={{backgroundColor: "#101517", padding: "20px"}}>
        <h3>Get in Touch</h3>
        <p>Email: <a href="mailto:georgepuchalski07@gmail.com">georgepuchalski07@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/george_mlem/" target="_blank" rel="noreferrer">@george_mlem</a></p>
      </section>

      <section className="pricing-block" style={{backgroundColor: "#101517", padding: "20px"}}>
        <h3>Pricing</h3>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Starting from</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bust</td>
              <td>$30</td>
              <td>Bust drawing with lineart and flat colors. </td>
            </tr>
            <tr>
              <td>Half-Body</td>
              <td>$40</td>
              <td>Half-body drawing with lineart and flat colors.</td>
            </tr>
            <tr>
              <td>Full-Body</td>
              <td>$60</td>
              <td>Full-body drawing with lineart and flat colors.</td>
            </tr>
          </tbody>
        </table>
        <img src={pricesImage} width="80%" alt="Pricing chart" />
      </section>
    </div>
  )
}
