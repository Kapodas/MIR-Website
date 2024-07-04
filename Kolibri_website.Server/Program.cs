using Kolibri_website.Server;
using LiteDB;
using System.Text;
var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/table", () =>
{
    var Tbl = ShowTable.CallTable();
    return Tbl;
}) .WithName("GetTable") .WithOpenApi();

app.MapGet("/category", () =>
{
    var Category = ShowCategory.Show();
    return Category;
}) .WithName("GetCategory") .WithOpenApi();

app.MapGet("/feedback", () =>
{
    var FB = ShowTable.CallFB();
    return FB;
}) .WithName("GetFeedback") .WithOpenApi();

app.MapGet("/autprojects", () =>
{
    var autprj = ShowTable.CallAutProj();
    return autprj;
}) .WithName("GetAutprojects") .WithOpenApi();

app.MapGet("/materials", () =>
{
    var Maters = ShowTable.CallMaterials();
    return Maters;
}) .WithName("GetMaterials") .WithOpenApi();


app.MapPost("/newcortege", (Cortege cort) =>
{
    Add_Cortege.NewCortege(cort);
    return Results.Ok();
}
).Accepts<Cortege>("application/json");
app.MapPost("/newmaterials", (Cortege cort) =>
{
    Add_Cortege.NewMaterials(cort);
    return Results.Ok();
}).Accepts<Cortege>("application/json");

app.MapPost("/newautproj", (Cortege cort) =>
{
    Add_Cortege.NewAutProj(cort);
    return Results.Ok();
}).Accepts<Cortege>("application/json");

app.MapPost("/delcortege", async (HttpContext context) =>
{
    using (var reader = new StreamReader(context.Request.Body, Encoding.UTF8))
    {
        var name = await reader.ReadToEndAsync();
        DelCortege.Delete(name);
    }
    return Results.Ok();
});
app.MapPost("/delmaters", async (HttpContext context) =>
{
    using (var reader = new StreamReader(context.Request.Body, Encoding.UTF8))
    {
        var name = await reader.ReadToEndAsync();
        DelCortege.DeleteMaters(name);
    }
    return Results.Ok();
});
app.MapPost("/delautors", async (HttpContext context) =>
{
    using (var reader = new StreamReader(context.Request.Body, Encoding.UTF8))
    {
        var name = await reader.ReadToEndAsync();
        DelCortege.DeleteAutors(name);
    }
    return Results.Ok();
});


app.MapPost("/addcategory", (string categ) =>
{
    Category.Add(categ);
}
);
app.MapPost("/delcategory", (int id) =>
{
    Category.Delete(id);
}
);
app.MapPost("/addquestion", (QuestionCortege question) =>
{
    SendingMail.SendQuestion(question);
}
);
app.MapPost("/addcustomer", (CustomerCortege customer) =>
{
    Add_Cortege.NewCustomer(customer);
}
);

app.MapPost("/addfeedback", (FeedbackCortege feedback) =>
{
    Add_Cortege.NewFeedBack(feedback);
    var Tbl = ShowTable.CallFB();
});
app.MapPost("/addemploee", (EmploeeCortege emploee) =>
{
    SendingMail.SendEmploee(emploee);
});
app.MapPost("/updatefb", (List<FeedbackCortege> feedback) =>
{
    Add_Cortege.UpdateFB(feedback);
});
app.MapPost("/updcortege", (Cortege cort) =>
{
    Add_Cortege.UpdCortege(cort);
});
app.MapPost("/updmaterials", (Cortege cort) =>
{
    Add_Cortege.UpdMaterials(cort);
});
app.MapPost("/updautproj", (Cortege cort) =>
{
    Add_Cortege.UpdAutProj(cort);
});


app.MapFallbackToFile("/index.html");

app.Run();

