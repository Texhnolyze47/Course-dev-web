import { createSignal } from 'solid-js';

function Pricing() {



    const [activeTab, setActiveTab] = createSignal(0);
    const tabs = [
      {
        name: "Individual",
        content: (
          <div class="grid grid-cols-2">
            <div class=" bg-gray-50 m-10 p-4">
              <h1 class="text-3xl pb-4">Gratis</h1>
              <p class="pb-4">$0.00</p>
              <p class="pb-4">No time limit</p>
              <button class="bg-gray-700 text-white p-2 mb-2">Sign up</button>
              <ul>
                <li class="mb-2">Acceso a los cursos gratis</li>
                <li class="mb-2">Plan de estudio persolizado</li>
                <li class="mb-2">Comunidad</li>
              </ul>
            </div>
            <div class="bg-gray-50 m-10 p-4">
              <h1 class="text-3xl pb-4">Personal</h1>
              <p class="pb-4">$200.00</p>
              <p class="pb-4">Por mes</p>
              <button class="bg-gray-700 text-white p-2 mb-2">
                Empieza una prueba gratuita
              </button>
              <ul>
                <li class="mb-2">Acceso ilimitado a todos los cursos</li>
                <li class="mb-2">Plan de estudio persolizado</li>
                <li class="mb-2">Comunidad</li>
                <li class="mb-2">Certificado</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        name: "Empresarial",
        content: (
          <div class="grid gap-4 grid-cols-3 grid-rows-3">
            <div class="bg-gray-50 m-10 p-4">
              <h1 class="text-3xl">Empresarial</h1>
              <p class="pb-4">$300.00 por persona</p>
              <p class="pb-4">Por mes</p>
              <button class="bg-gray-700 text-white p-2 mb-2">Empieza una prueba gratuita</button>
              <ul>
                <li class="mb-2">Acceso ilimitado a todos los cursos</li>
                <li class="mb-2">Dashboard para ver el progreso de los empleados</li>
                <li class="mb-2">Una cuenta propietaria</li>
                <li class="mb-2">1+ de usuarios</li>
                <li class="mb-2">Plan de estudio persolizado</li>
                <li class="mb-2">Comunidad</li>
                <li class="mb-2">Certificado</li>
              </ul>
            </div>
          </div>
        ),
      },
    ];

    function handleTabClick(index) {
        console.log('handleTabClick called');

        setActiveTab(index);
    }

    return (
        <div >
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
            <div class="py-10">{tabs[activeTab()].content}</div>
        </div>
    );
}

export default Pricing;