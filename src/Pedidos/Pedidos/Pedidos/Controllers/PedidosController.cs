using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pedidos.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pedidos.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class PedidosController : Controller
    {

        private IPedidosServices pedidosServices;

        public PedidosController(IPedidosServices pedidosServices)
        {
            this.pedidosServices = pedidosServices;
        }
        // GET: PedidosController
        [HttpGet]
        public ActionResult<IEnumerable<Models.Pedidos>> getPedidos()
        {
            return Ok(pedidosServices.GetPedidos());
        }

        // GET: PedidosController/Details/5
        [HttpGet("{id}")]
        public ActionResult<Models.Pedidos> getPedido(int id)
        {
            return Ok(pedidosServices.GetPedido(id));
        }


        [HttpPost]
        public ActionResult postPedido([FromBody] Models.Pedidos NuevoPedido)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var PedidoNuevo = pedidosServices.PostPedido(NuevoPedido);
            return Created($"api/Pedidos/{PedidoNuevo.id}", PedidoNuevo);
        }



        [HttpPut("{id}")]
        public ActionResult<Models.Pedidos> putPedido(int id, [FromBody] Models.Pedidos Pedido)
        {
            return Ok(pedidosServices.PutPedido(id, Pedido));
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Pedidos> deletePedido(int id)
        {
            return Ok(pedidosServices.DeletePedido(id));
        }

    }
}
