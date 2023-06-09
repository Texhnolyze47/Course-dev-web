import { createSignal } from 'solid-js';

function Pricing() {



    const [activeTab, setActiveTab] = createSignal(0);
    const tabs = [
        {
            name: 'Individual', content: (
                <div class="grid gap-4 grid-cols-3 grid-rows-3">
                    <div>
                        <h1>Gratis</h1>
                        <p>$0.00</p>
                        <p>No time limit</p>
                        <button>Sign up</button>
                        <ul>
                            <li>Acceso a los cursos gratis</li>
                            <li>Plan de estudio persolizado</li>
                            <li>Comunidad</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Personal</h1>
                        <p>$200.00</p> 
                        <p>Por mes</p>
                        <button>Empieza una prueba gratuita</button>
                        <ul>
                            <li>Acceso ilimitado a todos los cursos</li>
                            <li>Plan de estudio persolizado</li>
                            <li>Comunidad</li>
                            <li>Certificado</li>
                        </ul>
                    </div>

                </div>
            )
        },
        { name: 'Empresarial', content: (
            <div class="grid gap-4 grid-cols-3 grid-rows-3">
                <div>
                <h1>Empresarial</h1>
                <p>$300.00 por persona</p>
                <p>Por mes</p>
                <button>Empieza una prueba gratuita</button>
                <ul>
                    <li>Acceso ilimitado a todos los cursos</li>
                    <li>Dashboard para ver el progreso de los empleados</li>
                    <li>Una cuenta propietaria</li>
                    <li>1+ de usuarios</li>
                    <li>Plan de estudio persolizado</li>
                    <li>Comunidad</li>
                    <li>Certificado</li>
                </ul>

                </div>
 
            </div>
        ) },
    ];

    function handleTabClick(index) {
        console.log('handleTabClick called');

        setActiveTab(index);
    }

    return (
        <div>
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <a
                            href="#"
                            class={`${activeTab() === index
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            onClick={() => {
                                console.log('onClick called');
                                handleTabClick(index);
                            }}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
            <div class="py-6">{tabs[activeTab()].content}</div>
        </div>
    );
}

export default Pricing;