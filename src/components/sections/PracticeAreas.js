import { ScaleIcon, ShieldCheckIcon, BuildingOffice2Icon, ScaleIcon as ScaleIcon2, BookOpenIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const practices = [
    {
        name: 'Corporate Law',
        description: 'Expert guidance in corporate governance, mergers & acquisitions, and business restructuring.',
        icon: BuildingOffice2Icon,
    },
    {
        name: 'Civil Litigation',
        description: 'Comprehensive representation in civil disputes, property matters, and contractual issues.',
        icon: ScaleIcon,
    },
    {
        name: 'Constitutional Law',
        description: 'Protecting fundamental rights and handling constitutional matters with expertise.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Family Law',
        description: 'Sensitive handling of matrimonial matters, succession, and family disputes.',
        icon: UserGroupIcon,
    },
    {
        name: 'Real Estate Law',
        description: 'Expert counsel in property transactions, land acquisition, and real estate disputes.',
        icon: ScaleIcon2,
    },
    {
        name: 'Intellectual Property',
        description: 'Protection and enforcement of patents, trademarks, and copyrights.',
        icon: BookOpenIcon,
    },
]

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-law-navy mb-6">Areas of Practice</h2>
                    <div className="w-24 h-1 bg-law-gold mx-auto mb-8" />
                    <p className="text-law-gray max-w-2xl mx-auto">
                        Our team brings extensive experience across various domains of law,
                        providing comprehensive legal solutions while maintaining the highest ethical standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice) => (
                        <div
                            key={practice.name}
                            className="p-8 border border-law-light rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <practice.icon className="h-12 w-12 text-law-gold mb-6" />
                            <h3 className="font-serif text-2xl text-law-navy mb-4">{practice.name}</h3>
                            <p className="text-law-gray">{practice.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 