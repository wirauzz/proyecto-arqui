using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Pedidos.Models
{
    public class Pedidos
    {
        public int id { get; set; }
        [Required(ErrorMessage = "El nombre es requerido")]
        public string idRepartidorAsignado { get; set; }
        public string idCliente { get; set; }
        public string descripcionPedido { get; set; }
        public string itemsPedido { get; set; }
        public string direccionEntrega { get; set; }
        public string pedidoStatus { get; set; }
        public string notasEntrega { get; set;}
    }
}
