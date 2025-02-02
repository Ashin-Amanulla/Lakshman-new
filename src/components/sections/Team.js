import Image from 'next/image'

const team = [
    {
        name: 'Adv. Suresh Kumar',
        role: 'Senior Partner',
        image: '/images/lawyer1.jpg',
        description: 'Over 25 years of experience in Corporate and Constitutional Law',
    },
    {
        name: 'Adv. Lakshmi Menon',
        role: 'Managing Partner',
        image: '/images/lawyer2.jpg',
        description: 'Specialist in Civil Litigation and Family Law',
    },
    {
        name: 'Adv. Rajesh Iyer',
        role: 'Partner',
        image: '/images/lawyer3.jpg',
        description: 'Expert in Real Estate and Property Law',
    },
]

export default function Team() {
    return (
        <section id="team" className="py-24 bg-law-cream">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-law-navy mb-6">Our Legal Team</h2>
                    <div className="w-24 h-1 bg-law-gold mx-auto mb-8" />
                    <p className="text-law-gray max-w-2xl mx-auto">
                        Our team of experienced advocates is committed to providing exceptional legal counsel
                        while maintaining the highest standards of professional ethics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-80 w-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-2xl text-law-navy mb-2">{member.name}</h3>
                                <p className="text-law-gold font-semibold mb-4">{member.role}</p>
                                <p className="text-law-gray">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 