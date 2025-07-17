export default function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">About FashionHub</h1>

      {/* Brand Image (optional) */}
      <div className="flex justify-center mb-6">
        { <img
          src="/images/logo.png"  // optional brand logo
          alt="FashionHub Logo"
          className="w-32 h-32 object-contain"
        /> }
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Who We Are</h2>
          <p>
            FashionHub is your go-to destination for trendy, affordable clothing for women, men, and children.
            We are passionate about making fashion accessible to everyone, everywhere.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p>
            To provide stylish, high-quality apparel at prices that make sense, while delivering a smooth online shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Why Choose Us?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>👕 Hand-picked clothing collections</li>
            <li>🚚 Fast and reliable shipping</li>
            <li>💸 Affordable prices for all age groups</li>
            <li>📞 Dedicated customer support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p>
            To be India's most loved online fashion store that brings comfort and confidence to every wardrobe.
          </p>
        </section>
      </div>
    </div>
  );
}
